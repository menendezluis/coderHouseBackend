import multer from "multer";
import path from "path";
import { v4 } from "uuid";

const storage = multer.diskStorage({
  destination: path.resolve(process.cwd(), "public", "uploads"),
  filename: (req, file, cb) => {
    const id = v4();
    const extension = path.extname(file.originalname);
    cb(null, `${id}${extension}`);
  },
});

const upload = multer({ storage });

export default upload;
