import express from "express";
import utils from "../utils.js";

const router = express.Router();

router.post("/", utils.upload.single("file"), (req, res) => {
  const { file } = req;

  res.send({
    status: "ok",
    message: "Archivo subido",
    file: file,
  });
});

export default router;
