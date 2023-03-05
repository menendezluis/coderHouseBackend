import express from "express";
import routerMascotas from "./router/mascota.js";

const app = express();
const puerto = 3434;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/pets", routerMascotas);

const server = app.listen(puerto, () => {
  console.log(`Server up en puerto ${puerto}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
