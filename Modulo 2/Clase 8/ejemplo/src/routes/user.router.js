import { Router } from "express";
import upload from "../utils.js";

const router = Router();

//array de usuarios
const users = [
  {
    id: 1,
    name: "Juan",
    lastname: "Perez",
  },
  {
    id: 2,
    name: "Maria",
    lastname: "Gomez",
  },
  {
    id: 3,
    name: "Pedro",
    lastname: "Gomez",
  },
  {
    id: 4,
    name: "Jose",
    lastname: "Perez",
  },
];

router.get("/", (req, res) => {
  res.send(users || []);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    res.status(404).send("Usuario no encontrado");
  }
  res.send(user);
});

router.post("/", (req, res) => {
  const user = req.body;
  /*if (!user.name || !user.lastname) {
    res.status(400).send("Faltan datos");
  }*/
  user.id = users.length + 1;

  upload(req, res, (err) => {
    if (err) {
      res.status(500).send("Error al subir el archivo");
    }
    user.avatar = req.file.filename;
  });

  users.push(user);
  res.send({
    status: "ok",
    message: "Usuario agregado",
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    res.status(404).send("Usuario no encontrado");
  }
  user.name = req.body.name;
  user.lastname = req.body.lastname;

  const index = users.indexOf((user) => user.id === parseInt(id));
  users.splice(index, 1, user);
  res.send({
    status: "ok",
    message: "Usuario actualizado",
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    res.status(404).send("Usuario no encontrado");
  }
  const index = users.indexOf(user);
  users.splice(index, 1);
  res.send({
    status: "ok",
    message: "Usuario eliminado",
  });
});

export default router;
