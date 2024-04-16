// Create a Comment controller to interface with the Comment model to retrieve,
// create, update and delete comments on a specific post.

import CommentModel from "./comment.model.js";

export default class CommentController {
  getAllComments(req, res) {
    const { postId } = req.params.id;
    const response = CommentModel.getComments(postId);
    if (response.success) {
      res.status(200).send(response);
    }
  }
  createCommets(req, res) {
    const { content } = req.body;
    const response = CommentModel.addComment(req.userId, req.params.sid, content);
    if (response.success) {
      res.status(200).send(response);
    }
  }
  updateCommet(req, res) {
    const { postId, content } = req.body;
    const commentId=req.body.id;
    const response = CommentModel.updateComment(commentId,postId, req.userId, content);
    if (response.success) {
      res.status(200).send(response);
    } else {
      res.status(400).send(response);
    }
  }
  deleteComment(req, res) {
    const { commentId } = req.params.id;
    const response = CommentModel.deleteComment(commentId);
    if (response.success) {
      res.status(200).send(response);
    } else {
      res.status(400).send(response);
    }
  }
}
