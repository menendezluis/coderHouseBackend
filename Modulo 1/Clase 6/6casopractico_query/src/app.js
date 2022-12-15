import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    genero: "masculino",
    email: "juanperez30gmail.com",
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Gomez",
    edad: 25,
    genero: "femenino",
    email: "mariagomez25gmail.com",
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Gonzalez",
    edad: 35,
    genero: "masculino",
    email: "pedrogonzalez35gmail.com",
  },
  {
    id: 4,
    nombre: "Ana",
    apellido: "Gonzalez",
    edad: 35,
    genero: "femenino",
    email: "anagonzalez35gmail.com",
  },
  {
    id: 5,
    nombre: "Jose",
    apellido: "Gonzalez",
    edad: 35,
    genero: "masculino",
    email: "josegonzalez35gmail.com",
  },
  {
    id: 6,
    nombre: "Maria",
    apellido: "Gonzalez",
    edad: 35,
    genero: "femenino",
    email: "mariagonzalez35gmail.com",
  },
];

//filtro por genero con query

app.get("/usuarios", (req, res) => {
  const { genero } = req.query;
  console.log(req.query);
  const generodos = req.query.genero;
  if (genero && (genero == "masculino" || genero == "femenino")) {
    const usuariosFiltrados = usuarios.filter((u) => u.genero == genero);
    res.json(
      usuariosFiltrados.length > 0 ? usuariosFiltrados : "No hay usuarios"
    );
  } else if (genero) {
    res.json("Genero invalido");
  } else {
    res.json(usuarios);
  }
});

//filtro por genero con params
app.get("/usuarios/:genero", (req, res) => {
  const { genero } = req.params;
  if (genero && (genero == "masculino" || genero == "femenino")) {
    const usuariosFiltrados = usuarios.filter((u) => u.genero == genero);
    res.json(usuariosFiltrados);
  } else {
    res.json(usuarios);
  }
});

app.listen(8080, () => {
  console.log("Servidor arriba en puerto 8080");
});

/*
app.get("/saludo/:apellido/:nombre", (req, res) => {
  res.send(`Hola ${req.params.nombre} ${req.params.apellido}!`);
});*/
