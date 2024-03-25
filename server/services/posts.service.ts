import { Response } from "express";
import { postsModel } from "../models/posts/posts.model";
import { CatchAsyncError } from "../middleware/catchAsyncError";

//get all post
export const getAllPosts = async (res: Response) => {
  const posts = await postsModel
    .find()
    .sort({ createdAt: -1 })
    .populate("user", "_id name avatar")
    .populate("comments", "likes comment commentReplies _id createdAt")
    .populate("document", "_id url title pageCount size format");

  res.status(201).json({
    success: true,
    posts,
  });
};

//get all comments of specific post
export const getCommentofPost = async (id: string, res: Response) => {
  const post = await postsModel
    .findById(id)
    .sort({ createdAt: -1 })
    .populate("comments", "likes comment commentReplies _id createdAt")
    .populate({
      path: "comments",
      populate: [
        {
          path: "commentReplies",
          populate: [
            {
              path: "user",
              model: "User",
              select: "_id name avatar",
            },
          ],
        },
        {
          path: "user",
          model: "User",
          select: "_id name avatar",
        },
      ],
    });

  const comment = post?.comments.length === 0 ? "No comments" : post?.comments;
  const totalComment = post?.comments.length;

  res.status(201).json({
    success: true,
    totalComment: totalComment,
    comment,
  });
};
