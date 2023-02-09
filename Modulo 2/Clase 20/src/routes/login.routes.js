import { Router } from "express";
import userModel from "../model/user.model.js";
import { isValidPassword } from "../utils.js";

const router = Router();

router.get("/", async (req, res) => {
  const { email, password } = req.query;

  if (!email || !password) {
    res.render("login", { style: "css/login.css" });
  } else {
    try {
      const response = await userModel.find({
        email: email,
        password: password,
      });
      console.log(response);
      if (response.length > 0) {
        res.send("Usuario encontrado");
      } else {
        //alert("Usuario no encontrado");
        res.render("login", { style: "css/login.css" });
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res.status(400).send({ status: "error", message: "Faltan datos" });
      return;
    }
    const user = await userModel.findOne({ email: email });
    //console.log(user);
    if (!user) {
      res
        .status(404)
        .send({ status: "error", message: "Usuario no encontrado" });
      return;
    }
    const isValid = isValidPassword(password, user);
    console.log(isValid);

    if (!isValidPassword(password, user)) {
      res
        .status(401)
        .send({ status: "error", message: "Contraseña incorrecta" });
      return;
    }
    delete user.password;
    req.session.user = user;
    res.send({ status: "success", payload: user });
    return;
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
