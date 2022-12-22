import { Router } from "express";

const router = Router();

const alumnosCoderhouse = [
  {
    name: "Emiliano",
  },
  {
    name: "Federico",
  },
  {
    name: "Romina",
  },
];

router.get("/", (req, res) => {
  res.send(alumnosCoderhouse || []);
});

export default router;
