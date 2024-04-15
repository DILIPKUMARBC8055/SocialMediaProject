import express from "express";
import likeRouter from "./src/features/likes/like.route.js";
import userRouter from "./src/features/users/user.route.js";
import postRouter from "./src/features/posts/post.route.js";
import commentRouter from "./src/features/comment/comment.route.js";
import customError from "./src/middlewares/customeError.middleware.js";
const server = express();

server.use("/api/post", postRouter);
server.use("/api/likes", likeRouter);
server.use("/api", userRouter);
server.use("/api/comments", commentRouter);

server.use(customError);
server.listen(8080, () => {
  console.log("The server is listening at 8080");
});
