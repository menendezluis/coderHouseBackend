import { Router } from "express";
import userModel from "../model/user.model.js";
import { isValidPassword, createHash } from "../utils.js";

const router = Router();

router.get("/", async (req, res) => {
  res.render("forgot", { style: "css/login.css" });
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res.status(400).send({ status: "error", message: "Faltan datos" });
      return;
    }
    const user = await userModel.findOne({ email: email });
    //console.log("soy el user", user);
    if (!user) {
      res
        .status(404)
        .send({ status: "error", message: "Usuario no encontrado" });
      return;
    }
    // console.log("antes", user);
    user.password = createHash(password);
    // console.log("despues", user);

    const response = await userModel.updateOne({ email: email }, user);

    if (response) {
      res.send({ status: "success", payload: user });
      return;
    }

    return;
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
