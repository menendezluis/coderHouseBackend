import { Router } from "express";
import {
  getDatosController,
  postDatosController,
} from "../controlador/index.js";

const router = Router();

router.get("/", getDatosController);
router.post("/", postDatosController);

export default router;
