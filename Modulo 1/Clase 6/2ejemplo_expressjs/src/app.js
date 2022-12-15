import express from "express";

const app = express();

app.get("/saludo", (req, res) => {
  res.send("Hola con Express!");
});

app.listen(8080, () => {
  console.log("Servidor arriba en puerto 8080");
});
