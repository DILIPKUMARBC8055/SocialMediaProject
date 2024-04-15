import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  diskStorage: (req, file, cb) => {
    cb(null, path.join(path.resolve(), "src", "public", "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });
export default upload;
