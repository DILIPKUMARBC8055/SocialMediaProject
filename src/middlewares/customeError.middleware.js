import CustomError from "../features/error-handler/customError.js";
const customError = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CustomError) {
    return res.send(err.code).send(err.message);
  }
  res
    .status(500)
    .send("OOPs! we will get back to you soon as the server is crash");
};
export default customError;
