import express from "express";

const app = express();

//ejemplo de ruta con parametro
app.get("/saludo/:nombre", (req, res) => {
  res.send(`Hola ${req.params.nombre}!`);
});

//ejemplo de ruta con parametro opcional
app.get("/saludoopcional/:nombre?", (req, res) => {
  if (req.params.nombre) {
    res.send(`Hola ${req.params.nombre}!`);
  } else {
    res.send("Hola!");
  }
});
//ejemplo con dos parametros apellido y nombre

app.get("/saludo/:apellido/:nombre", (req, res) => {
  res.send(`Hola ${req.params.nombre} ${req.params.apellido}!`);
});
/*
//ejemplo de ruta con query string
app.get("/saludoquery", (req, res) => {
  if (req.query.nombre) {
    res.send(`Hola ${req.query.nombre}!`);
  } else {
    res.send("Hola!");
  }
});

//ejemplo de ruta con query string y parametro
app.get("/saludodos/:nombre?", (req, res) => {
  if (req.params.nombre) {
    res.send(`Hola ${req.params.nombre}!`);
  } else if (req.query.nombre) {
    res.send(`Hola ${req.query.nombre}!`);
  } else {
    res.send("Hola!");
  }
});

*/

app.listen(8080, () => {
  console.log("Servidor arriba en puerto 8080");
});
