import express from "express";

const app = express();

app.get("/saludo", (req, res) => {
  res.send("<h1 style='color:blue'>Hola con Express!</h1>");
});

app.get("/", (req, res) => {
  res.send("Hola esta es la raiz con Express!");
});

app.get("/despedida", (req, res) => {
  res.send("Adios!");
});

app.listen(8080, () => {
  console.log("Servidor arriba en puerto 8080");
});
