import { Router } from "express";

const router = Router();

const pets = [
  {
    id: 1,
    name: "Firulais",
    type: "perro",
    age: 3,
    owner: "Juan",
  },
  {
    id: 2,
    name: "Pelusa",
    type: "gato",
    age: 2,
    owner: "Maria",
  },
  {
    id: 3,
    name: "Pulga",
    type: "perro",
    age: 1,
    owner: "Pedro",
  },
  {
    id: 4,
    name: "Luna",
    type: "gato",
    age: 4,
    owner: "Jose",
  },
];
router.get("/", (req, res) => {
  res.send(pets || []);
});

router.post("/", (req, res) => {
  const pet = req.body;

  pets.push(pet);
  res.send({
    status: "ok",
    message: "Mascota agregada",
  });
});

export default router;
