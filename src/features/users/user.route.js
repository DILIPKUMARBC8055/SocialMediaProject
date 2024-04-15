// User routes
// /api
// • POST /signup: Register a new user account
// • POST /signin: Log in as a user

import { Router } from "express";
import UserController from "./user.controller.js";
const userRouter= Router();
const user = new UserController();

userRouter.post("/signup",user.registerUser);
userRouter.post("/signin",user.loginUser);
export default userRouter;