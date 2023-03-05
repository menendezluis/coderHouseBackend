import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", (req, res) => {
  const { email, password } = req.body;

  if (email === "coder@coder.com" && password === "123456") {
    let token = jwt.sign({ email, password }, "codersecret", {
      expiresIn: "24h",
    });
    res
      .cookie("coderCookieToken", token, {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
      })
      .send({ message: "Login success" });
    //res.send({ message: "Login success", token });
  }
});

export default router;
