//importanciones mongoose models
import { toyModel } from "./models/toys.js";
const datos = [];

async function recuperarTodos() {
  const respuesta = await toyModel.find();
  return respuesta;
  //return datos;
}

async function guardarDatos(dato) {
  const nuevoDato = new toyModel(dato);
  const respuesta = await nuevoDato.save();
  return respuesta;
  //datos.push(dato);
}

export { recuperarTodos, guardarDatos };
