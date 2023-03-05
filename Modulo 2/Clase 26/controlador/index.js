import { obtenerDatos, crearDato } from "../negocio/index.js";

async function getDatosController(req, res) {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader === undefined) {
    res.status(401).json({ error: "No hay token" });
    return;
  }
  const bearer = bearerHeader.split(" ");
  const bearerToken = bearer[1];
  if (bearerToken !== "123456") {
    res.status(401).json({ error: "Token incorrecto" });
    return;
  }
  try {
    const datos = await obtenerDatos();
    res.json(datos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function postDatosController(req, res) {
  const dato = req.body;
  try {
    const datoCreado = await crearDato(dato);
    res.status(201).json(datoCreado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export { getDatosController, postDatosController };
