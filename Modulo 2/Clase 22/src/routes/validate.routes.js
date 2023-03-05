import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

router.get("/", async (req, res) => {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader === undefined) {
    res.status(401).json({ error: "No hay token" });
    return;
  }
  const bearer = bearerHeader.split(" ");
  const bearerToken = bearer[1];

  const isValidToken = jwt.verify(bearerToken, "codersecret");
  console.log(isValidToken);

  if (isValidToken) {
    console.log(isValidToken);
    res.send({ message: "Valid token" });
  } else {
    res.send({ message: "Invalid token" });
  }
});

router.post("/", (req, res) => {
  const { email, password } = req.body;

  if (email === "coder@coder.com" && password === "123456") {
    let token = jwt.sign({ email, password }, "codersecret", {
      expiresIn: "24h",
    });
    res.send({ message: "Login success", token });
  }

  res.send({ email, password });
});

export default router;
