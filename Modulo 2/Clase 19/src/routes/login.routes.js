import { Router } from "express";
import userModel from "../model/user.model.js";

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

export default router;
