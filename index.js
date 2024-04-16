import express from "express";
import likeRouter from "./src/features/likes/like.route.js";
import userRouter from "./src/features/users/user.route.js";
import postRouter from "./src/features/posts/post.route.js";
import commentRouter from "./src/features/comment/comment.route.js";
import customError from "./src/middlewares/customeError.middleware.js";
import jwtAuth from "./src/middlewares/jwtAuth.middleware.js";
import loggerMiddleware from "./src/middlewares/logger.middleware.js";
import swagger from "swagger-ui-express";
import bodyParser from "body-parser";
import swaggerFile from "./swagger.json" assert { type: "json" };
import path from "path";
const server = express();
server.use(express.static(path.join(path.resolve(), "public")));
server.use("/api-docs", swagger.serve, swagger.setup(swaggerFile));
server.use(loggerMiddleware);
server.use(bodyParser.json());
server.use("/api/post", jwtAuth, postRouter);
server.use("/api/likes", jwtAuth, likeRouter);
server.use("/api", userRouter);
server.use("/api/comments", jwtAuth, commentRouter);

server.use(customError);
server.get("/", (req, res) => {
  res.send("Welcome to Social Media app");
});
server.listen(8080, () => {
  console.log("The server is listening at 8080");
});
