import express from "express";

const app = express();

const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    email: "juanperez30gmail.com",
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Gomez",
    edad: 25,
    email: "mariagomez25gmail.com",
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Gonzalez",
    edad: 35,
    email: "pedrogonzalez35gmail.com",
  },
];

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id == req.params.id);
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ error: "Usuario no encontrado" });
  }
});

app.listen(8080, () => {
  console.log("Servidor arriba en puerto 8080");
});

/*
app.get("/saludo/:apellido/:nombre", (req, res) => {
  res.send(`Hola ${req.params.nombre} ${req.params.apellido}!`);
});*/
