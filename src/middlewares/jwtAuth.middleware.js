import jwt from "jsonwebtoken";
const jwtAuth = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(400).send("unauthorized");
  }
  try {
    const verify = jwt.verify(token, "NKeXaiUuddIffaRDp9nxz1a83RrELczr");
    req.userId = verify.userId;
    console.log(req.userId);
  } catch (error) {
    console.log(error);
    return res.status(400).send("unauthorized");
  }
  next();
};
export default jwtAuth;
