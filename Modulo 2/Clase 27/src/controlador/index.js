//importaciones de de la capa de negocio
import { getDatos, postDatos } from "../negocio/index.js";

async function getDatosController(req, res) {
  const datos = await getDatos();
  res.json(datos);
  //res.json({ mensaje: "Hola Get!" });
}

async function postDatosController(req, res) {
  const datos = await postDatos(req.body);
  res.json(datos);
  // res.json({ mensaje: "Hola Post!" });
}

export { getDatosController, postDatosController };
