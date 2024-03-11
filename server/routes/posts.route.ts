import express from "express";
import { addComment, addCommentReply, deleteComment, deleteCommentReply, deletePost, getPostComment, getPosts, likeAndUnlikeComment, likeAndUnlikeCommentReply, likeAndUnlikePost, updateComment, updateCommentReply, updatePost, uploadPost } from "../controllers/posts.controller";
import { isAuthenticated } from "../middleware/auth";
const postRouter = express.Router();

postRouter.post("/create-post", isAuthenticated, uploadPost);
postRouter.get("/posts", isAuthenticated, getPosts);
postRouter.put("/update-post/:id", isAuthenticated, updatePost);
postRouter.delete("/delete-post/:id", isAuthenticated, deletePost);
postRouter.post("/post/like/:id", isAuthenticated, likeAndUnlikePost);
postRouter.post("/post/comment/:id", isAuthenticated, addComment);
postRouter.put("/post/update-comment/:id", isAuthenticated, updateComment);
postRouter.delete("/post/delete-comment/:id", isAuthenticated, deleteComment);
postRouter.post("/post/comment/like/:id", isAuthenticated, likeAndUnlikeComment);
postRouter.post("/post/comment/reply/:id", isAuthenticated, addCommentReply);
postRouter.get("/post/comment/:id", isAuthenticated, getPostComment);
postRouter.post("/post/comment-reply/like/:id", isAuthenticated, likeAndUnlikeCommentReply);
postRouter.put("/post/update-comment-reply/:id", isAuthenticated, updateCommentReply);
postRouter.delete("/post/delete-comment-reply/:id", isAuthenticated, deleteCommentReply);




export default postRouter;