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

export const upload = multer({ storage });

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const isEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

export default { getRandomInt, upload };
