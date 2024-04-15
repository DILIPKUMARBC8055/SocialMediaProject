// /api/likes
// •GET /:postld: Retrieve all likes for a specific post
// • GET /toggle/:postld: Toggle like status for a specific post

import { Router } from "express";
import LikeController from "./like.controller.js";
const likeRouter = Router();
const like = new LikeController();

likeRouter.get("/:postId", like.likePost);
likeRouter.get("/toggle/:postId", like.toggle);

export default likeRouter;
