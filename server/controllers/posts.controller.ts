import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";
import cloudinary from "cloudinary";
import userModel from "../models/user.model";
import {
  CommentsModel,
  commentRepliesModel,
  documentsModel,
  postsModel,
} from "../models/posts/posts.model";
import { redis } from "../utils/redis";
import { getAllPosts, getCommentofPost } from "../services/posts.service";
import mongoose from "mongoose";

// upload post (create post)
interface IDocument {
  file: string;
  title: string;
}
interface IUploadPost {
  captions: string;
  document: IDocument;
  tags?: Array<{ tags: String }>;
}
export const uploadPost = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { captions, document, tags } = req.body as IUploadPost;
      const user = await userModel.findById(req.user?._id);

      const file = document.file;
      var documentData = {};
      if (file && document.title) {
        const myCloud = await cloudinary.v2.uploader.upload(file, {
          folder: "documents",
        });
        documentData = {
          user: user?._id,
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
          title: document.title,
          pageCount: myCloud.pages,
          size: myCloud.bytes,
          format: myCloud.format,
        };
      } else {
        return next(new ErrorHandler("fill required details", 400));
      }
      const newDocument = await documentsModel.create(documentData);
      const data = {
        captions: captions,
        user: user?._id,
        document: newDocument?._id,
        tags: tags,
      };

      const post = await postsModel.create(data);

      user?.posts.push(post?._id);
      await user?.save();
      await redis.set(req.user?._id, JSON.stringify(user));

      res.status(201).json({
        success: true,
        post,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

//update  post
interface IUpdatePost {
  captions?: string;
  tags?: Array<{ tags: String }>;
}
export const updatePost = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { captions, tags } = req.body as IUpdatePost;
      const post = await postsModel.findById(req.params.id);

      if (!post) {
        return next(new ErrorHandler("Post not found", 400));
      }

      if (post.user.toString() !== req.user?._id) {
        return next(new ErrorHandler("Invalid User", 400));
      }
      if (!captions && !tags) {
        return next(new ErrorHandler("Update fail", 400));
      }
      if (captions) {
        post.captions = captions;
      }
      if (tags) {
        post.tags = tags;
      }
      await post.save();
      res.status(201).json({
        success: true,
        post,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

//delete post
export const deletePost = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const post = await postsModel.findById(id).populate("comments", "_id commentReplies");

      if (!post) {
        return next(new ErrorHandler("Comment not found", 400));
      }

      if (post.user.toString() !== req.user?._id) {
        return next(new ErrorHandler("Invalid User", 400));
      }

      let commentIds = [] as any;

      // Loop through each comment and extract its _id
      post.comments.forEach((comment) => {
        commentIds.push(comment?._id);
      });

      let allCommentReplies = [] as any;

      // Loop through each comment and extract commentReplies
      post.comments.forEach((comment) => {
        allCommentReplies = allCommentReplies.concat(comment.commentReplies);
      });

      // Delete comment replies associated with the comment
      await commentRepliesModel.deleteMany({ _id: { $in: allCommentReplies } });
      
      // Delete comment associated with the post
      await CommentsModel.deleteMany({ _id: { $in: commentIds } });


      // Delete post
      await post.deleteOne({ id });

      res.status(201).json({
        success: true,
        message: "Comment delete successfully",
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

// get all posts
export const getPosts = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      getAllPosts(res);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

// like and unlike post
export const likeAndUnlikePost = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await postsModel.findById(req.params.id);

      if (!post) {
        return next(new ErrorHandler("Post not found", 400));
      }

      if (post.likes.includes(req.user?._id)) {
        const index = post.likes.indexOf(req.user?._id);
        post.likes.splice(index, 1);
        await post.save();

        res.status(201).json({
          success: true,
          message: "Post unliked",
        });
      } else {
        post.likes.push(req.user?._id);
        await post.save();

        res.status(201).json({
          success: true,
          message: "Post Liked",
        });
      }
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

//add comment
export const addComment = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await postsModel.findById(req.params.id);

      if (!post) {
        return next(new ErrorHandler("Post not found", 400));
      }
      if (!req.body.comment) {
        return next(new ErrorHandler("Enter your comment", 400));
      }
      const comment = {
        user: req.user?._id,
        post: post._id,
        comment: req.body.comment,
      };
      const newComment = await CommentsModel.create(comment);

      post.comments.push(newComment._id);
      await post.save();

      res.status(201).json({
        success: true,
        newComment,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

// get comment of specific post
export const getPostComment = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
      getCommentofPost(id, res);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

//update comment
export const updateComment = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const comment = await CommentsModel.findById(req.params.id);
      const new_comment = req.body.comment as string;

      if (!comment) {
        return next(new ErrorHandler("Comment not found", 400));
      }
      if (comment.user.toString() !== req.user?._id) {
        return next(new ErrorHandler("Invalid User", 400));
      }

      if (!new_comment) {
        return next(new ErrorHandler("Enter your comment", 400));
      }
      comment.comment = new_comment;

      await comment.save();

      res.status(201).json({
        success: true,
        comment,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

//delete comment
export const deleteComment = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const comment = await CommentsModel.findById(id);

      if (!comment) {
        return next(new ErrorHandler("Comment not found", 400));
      }

      if (comment.user.toString() !== req.user?._id) {
        return next(new ErrorHandler("Invalid User", 400));
      }

      const post_id = comment.post;
      const post = await postsModel.findById(post_id);

      if (post?.comments.includes(comment._id)) {
        const index = post?.comments.indexOf(comment._id);
        post?.comments.splice(index, 1);
        await post.save();
      }

      // Convert commentReplies to an array of ObjectIds if it's not already
      const commentReplyIds = comment.commentReplies?.map((reply) => {
        return typeof reply === "string"
          ? mongoose.Types.ObjectId.createFromHexString(reply)
          : reply;
      });

      // Delete comment replies associated with the comment
      await commentRepliesModel.deleteMany({ _id: { $in: commentReplyIds } });

      await comment.deleteOne({ id });

      res.status(201).json({
        success: true,
        message: "Comment delete successfully",
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

//like comment
export const likeAndUnlikeComment = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const comment = await CommentsModel.findById(req.params.id);

      if (!comment) {
        return next(new ErrorHandler("Post not found", 400));
      }

      if (comment.likes.includes(req.user?._id)) {
        const index = comment.likes.indexOf(req.user?._id);
        comment.likes.splice(index, 1);
        await comment.save();

        res.status(201).json({
          success: true,
          message: "Comment unliked",
        });
      } else {
        comment.likes.push(req.user?._id);
        await comment.save();

        res.status(201).json({
          success: true,
          message: "Comment Liked",
        });
      }
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

//reply comment
export const addCommentReply = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const new_comment = req.body.comment as string;
      const comment = await CommentsModel.findById(req.params.id);

      if (!comment) {
        return next(new ErrorHandler("Post not found", 400));
      }
      if (!new_comment) {
        return next(new ErrorHandler("Enter your comment", 400));
      }

      const commentReply = {
        user: req.user?._id,
        commentId: comment._id,
        comment: new_comment,
      };
      const newComment = await commentRepliesModel.create(commentReply);

      comment.commentReplies?.push(newComment._id);
      await comment.save();

      res.status(201).json({
        success: true,
        newComment,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

//like  comment Reply
export const likeAndUnlikeCommentReply = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const commentReply = await commentRepliesModel.findById(req.params.id);

      if (!commentReply) {
        return next(new ErrorHandler("Post not found", 400));
      }

      if (commentReply.likes.includes(req.user?._id)) {
        const index = commentReply.likes.indexOf(req.user?._id);
        commentReply.likes.splice(index, 1);
        await commentReply.save();

        res.status(201).json({
          success: true,
          message: "Comment unliked",
        });
      } else {
        commentReply.likes.push(req.user?._id);
        await commentReply.save();

        res.status(201).json({
          success: true,
          message: "Comment Liked",
        });
      }
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

//update reply comment
export const updateCommentReply = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const commentReply = await commentRepliesModel.findById(req.params.id);
      const new_comment = req.body.comment as string;

      if (!commentReply) {
        return next(new ErrorHandler("Comment not found", 400));
      }
      if (commentReply.user.toString() !== req.user?._id) {
        return next(new ErrorHandler("Invalid User", 400));
      }

      if (!new_comment) {
        return next(new ErrorHandler("Enter your comment", 400));
      }
      commentReply.comment = new_comment;

      await commentReply.save();

      res.status(201).json({
        success: true,
        commentReply,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

//delete reply comment
export const deleteCommentReply = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const commentReply = await commentRepliesModel.findById(id);

      if (!commentReply) {
        return next(new ErrorHandler("Comment not found", 400));
      }

      if (commentReply.user.toString() !== req.user?._id) {
        return next(new ErrorHandler("Invalid User", 400));
      }

      const comment_id = commentReply.commentId;
      const comment = await CommentsModel.findById(comment_id);

      if (comment?.commentReplies?.includes(commentReply._id)) {
        const index = comment?.commentReplies.indexOf(commentReply._id);
        comment?.commentReplies.splice(index, 1);
        await comment.save();
      }

      await commentReply.deleteOne({ id });

      res.status(201).json({
        success: true,
        message: "Comment delete successfully",
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);
