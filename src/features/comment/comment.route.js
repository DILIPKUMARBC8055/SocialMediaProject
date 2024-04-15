// /api/comments
// • GET /id: Retrieve all comments for a specific post
// • POST /sid: Add a new comment to a specific post
// • DELETE /id: Delete a specific comment by ID
// • PUT /id: Update a specific comment by ID

import { Router } from "express";
import CommentController from "./comment.controller.js";
const commentRouter = Router();
const comment = new CommentController();
commentRouter.get("/:id", comment.getAllComments);
commentRouter.post("/:sid", comment.createCommets);
commentRouter.delete("/:id", comment.deleteComment);
commentRouter.put("/:id", comment.updateCommet);

export default commentRouter;
