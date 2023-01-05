import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("desde el servidor");
  res.render("chat", {});
});

export default router;
