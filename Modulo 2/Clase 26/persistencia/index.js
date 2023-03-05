import fs from "fs";
const datos = [];
import operationsModel from "./operations.models.js";

//const archivo = "datos.json";

async function recuperarTodos() {
  try {
    //const data = await fs.promises.readFile(archivo, "utf-8");
    //return JSON.parse(data);
    const result = await operationsModel.find();
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function guardar(dato) {
  try {
    // const data = await fs.promises.readFile(archivo, "utf-8");
    //  const datos = JSON.parse(data);
    //datos.push(dato);
    // await fs.promises.writeFile(archivo, JSON.stringify(datos, null, 2));
    //return dato;
    const result = await operationsModel.create(dato);
    return dato;
  } catch (err) {
    console.log(err);
  }
  //datos.push(dato);
  //return dato;
}

export { recuperarTodos, guardar };
