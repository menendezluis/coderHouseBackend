import { Router } from "express";

const router = Router();

const users = [
  {
    id: 1,
    name: "Alumno",
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

router.post("/", (req, res) => {
  const user = req.body;

  users.push(user);
  res.send({
    status: "ok",
    message: "Usuario agregado",
  });
});
export default router;
