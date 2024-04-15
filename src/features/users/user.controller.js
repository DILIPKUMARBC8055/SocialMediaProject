// 4. Create a User controller to interface with the User model and handle user registration and login.

import UserModel from "./user.model.js";

export default class UserController {
   registerUser(req, res) {
    const { name, email, password } = req.body;
    const user = UserModel.addUser(name, email, password);
    res.status(201).send(user);
  }
   loginUser(req, res) {
    const { email, password } = req.body;
    if (UserModel.confirmLogin(email, password)) {
      return res.status(200).send({ success: true, message: "login Success" });
    }
    return res
      .status(401)
      .send({ success: false, message: "Invalid credentials" });
  }
}
