// /api/posts
// • GET /all: Retrieve all posts
// • GET /:id: Retrieve a specific post by ID
// • GET /: Retrieve posts based on user credentials
// • POST/: Create a new post (Image upload functionality included)
// • DELETE /id: Delete a specific post by ID
// • PUT /id: Update a specific post by ID (Image upload functionality included)

import { Router } from "express";
import PostController from "./post.controller.js";
const post= new PostController();
const postRouter= Router();
postRouter.get("/all",post.getAllPosts);
postRouter.get("/:id",post.getPostById);
postRouter.get('/',post.getUserPost);
postRouter.post("/",post.createPost);
postRouter.delete("/:id",post.deletePost);
postRouter.put("/:id",post.updatePost);

export default postRouter;