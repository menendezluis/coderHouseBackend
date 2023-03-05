import { recuperarTodos, guardar } from "../persistencia/index.js";
import MATH from "clase37newpack";

function handleOperationString(operation) {
  switch (operation) {
    case "sum":
      return "sumar";
    case "rest":
      return "restar";
    case "mult":
      return "multiplicar";
    case "div":
      return "dividir";
  }
}
function handleSuccess(operation, a, b) {
  return {
    message: `La ${operation} de ${a} y ${b} es ${MATH[operation](a, b)}`,
    result: "ok",
  };
}

function calculate(dato) {
  const { operation, a, b } = dato;

  if (a === undefined) return { message: "a is undefined", result: "error" };
  if (b === undefined) return { message: "b is undefined", result: "error" };
  let aTemp = parseInt(a);
  let bTemp = parseInt(b);
  //console.log(operation);
  switch (operation) {
    case "sum":
      return handleSuccess(operation, aTemp, bTemp);
    case "rest":
      return handleSuccess(operation, aTemp, bTemp);
    case "mult":
      return handleSuccess(operation, aTemp, bTemp);
    case "div":
      return handleSuccess(operation, aTemp, bTemp);
    default:
      return { message: "Operation not found", result: "error" };
  }
}
async function obtenerDatos() {
  return await recuperarTodos();
}

async function crearDato(dato) {
  dato.added = Date.now();
  dato.result = calculate(dato);
  dato.operation = handleOperationString(dato.operation);

  await guardar(dato);
  return dato;
}

export { obtenerDatos, crearDato };
