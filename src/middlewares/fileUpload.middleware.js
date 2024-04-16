import multer from "multer";
import path from 'path';
const storage = multer.diskStorage({
  destination: (req,res,cb)=>{
    cb(null,path.join(path.resolve(),"public"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });
export default upload;
