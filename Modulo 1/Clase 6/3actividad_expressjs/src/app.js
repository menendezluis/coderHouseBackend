import express from "express";

const app = express();

app.get("/bienvenida", (req, res) => {
  //saludar con h1 color azul
  res.send("<h1 style='color:blue'>Hola con Express!</h1>");
});

app.get("/usuario", (req, res) => {
  res.json({
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    email: "juanperez30gmail.com",
  });
});

app.listen(8080, () => {
  console.log("Servidor arriba en puerto 8080");
});
