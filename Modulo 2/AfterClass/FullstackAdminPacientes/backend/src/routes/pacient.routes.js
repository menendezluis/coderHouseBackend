import { Router } from "express";
import { pacientModel } from "../models/pacient.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    let users = await pacientModel.find();
    res.send(
      users.length > 0
        ? users
        : { error: "No hay usuarios cargados", users: users }
    );
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    let users = await pacientModel.find({ email: email });
    res.send(
      users.length > 0
        ? users
        : { error: "No hay ninguna coincidencia", users: users }
    );
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  const { data } = req.body;

  try {
    const result = await pacientModel.insertMany(data);
    res.send({ status: "success", payload: result });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const result = await pacientModel.deleteOne({ email: email });
    res.send({ status: "success", payload: result });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put("/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const result = await pacientModel.updateOne({ email: email }, req.body);
    res.send({ status: "success", payload: result });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
