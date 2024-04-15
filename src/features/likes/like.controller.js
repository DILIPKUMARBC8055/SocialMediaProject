// Create a Like controller to interface with the Like model to retrieve and

import LikeModel from "./like.model.js";

//toggle likes on a specific post.
export default class LikeController {
  likePost(req, res) {
    const { postId, userId } = req.body;
    const response = LikeModel.addLike(userId, postId);
    if (response.success) {
      res.status(200).send(response);
    } else {
      res.status(400).send(response);
    }
  }
  toggle(req, res) {
    const { postId, userId } = req.body;
    const response = LikeModel.removeLike(userId, postId);
    if (response.success) {
      res.status(200).send(response);
    } else {
      res.status(400).send(response);
    }

  }
}
