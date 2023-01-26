import { Router } from "express";
import { v4 } from "uuid";
import FileManager from "../data/classes/DBManager.js";
import path from "path";

const cartRouter = Router();
const cartFileManager = new FileManager.CartFileManager();

cartRouter.get("/", async (req, res) => {
  try {
    const cart = await cartFileManager.read();
    res.send(cart);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

cartRouter.post("/", async (req, res) => {
  try {
    const response = await cartFileManager.create([]);
    console.log(response);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

cartRouter.put("/:pid", async (req, res) => {
  const { pid } = req.params;
  const newProduct = req.body;

  try {
    const response = await cartFileManager.update(pid, newProduct);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

cartRouter.delete("/:pid", async (req, res) => {
  const { pid } = req.params;

  try {
    const response = await cartFileManager.delete(pid);
    res.send({
      message: "Producto eliminado",
      id: pid,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default cartRouter;
