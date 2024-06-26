// 6. Create a Post controller to interface with the Post model to retrieve, create, update and delete posts.

import PostModel from "./post.model.js";

export default class PostController {
  getAllPosts(req, res) {
    const posts = PostModel.getPosts();
    res.status(200).send(posts);
  }
  createPost(req, res) {
    const { caption } = req.body;

    const post = PostModel.addPost(req.userId, caption, req.file.filename);
    res.status(201).send(post);
  }
  updatePost(req, res) {
    const { caption, imageUrl } = req.body;
    const post = PostModel.updatePost(
      req.userId,
      req.params.id,
      caption,
      imageUrl
    );
    res.status(200).send(post);
  }
  deletePost(req, res) {
    const { postId } = req.params.id;
    const response = PostModel.deletePost(postId);
    if (response.status) {
      return res.status(200).send(response);
    }
    return res.status(401).send(response);
  }
  getUserPost(req, res) {
    const response = PostModel.getUserPost(req.userId);
    return res.status(200).send(response);
  }
  getPostById(req, res) {
    const { postId } = req.params.id;
    const response = PostModel.getPostById(postId);
    if (response.status) {
      return res.send(200).send(response);
    }
    return res.send(404).send(response);
  }
}
