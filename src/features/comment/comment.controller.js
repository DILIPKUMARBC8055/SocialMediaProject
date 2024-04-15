// Create a Comment controller to interface with the Comment model to retrieve,
// create, update and delete comments on a specific post.

import CommentModel from "./comment.model.js";

export default class CommentController {
  getAllComments(req, res) {
    const { postId } = req.body;
    const response = CommentModel.getComments(postId);
    if (response.success) {
      res.status(200).send(response);
    }
  }
  createCommets(req, res) {
    const { userId, postId, content } = req.body;
    const response = CommentModel.addComment(userId, postId, content);
    if (response.success) {
      res.status(200).send(response);
    }
  }
  updateCommet(req, res) {
    const { postId, userId, content } = req.body;
    const response = CommentModel.updateComment(postId, userId, content);
    if (response.success) {
      res.status(200).send(response);
    } else {
      res.status(400).send(response);
    }
  }
  deleteComment(req,res)
  {
    const{commentId}=req.body;
    const response=CommentModel.deleteComment(commentId);
    if (response.success) {
        res.status(200).send(response);
      } else {
        res.status(400).send(response);
      }

  }
}
