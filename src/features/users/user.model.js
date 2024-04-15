// User
// - id: Unique identifier for each user.
// - name: Name of the user.
// - email: Email address of the user.
// - password: Password for user authentication.
// The User data structure is used to store information about users, including their identification details such as name, email, and password.

export default class UserModel {
  static id = 1;
  constructor(name, email, password) {
    this.id = UserModel.id++;
    this.name = name;
    this.email = email;
    this.password = password;
  }
//   3. Create a User model with functions for getting all the users, adding a user, and confirming user login.
static getAllUsers()
{
    return users;
}
static addUser(name,email,password)
{
    const newUser= new UserModel(name,email,password);
    users.push(newUser);
    return newUser;
}
static confirmLogin(email,password)
{
    const user = users.find((u)=>u.email==email && u.password==password);
    if(user)
    {
        return true;
    }
    return false;
}

}

const users=[];
