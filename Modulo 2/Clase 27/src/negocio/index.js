//importaciones de la capa persistencia
import { recuperarTodos, guardarDatos } from "../persistencia/index.js";
async function getDatos() {
  const datos = await recuperarTodos();
  return datos;
  //return [];
}

async function postDatos(dato) {
  dato.added = Date.now();
  await guardarDatos(dato);
  return dato;
}

export { getDatos, postDatos };
