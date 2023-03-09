import express from "express";
import mongoose from "mongoose";
//import { USER_MONGO, PASS_MONGO, DB_MONGO } from "./config/index.js";
import router from "./ruta/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const USER_MONGO = "coderhouse";
const PASS_MONGO = "coder123";
const DB_MONGO = "dev41150";

app.use("/api", router);

const server = app.listen(3000, () => {
  console.log("Server on port 3000");
});

server.on("error", (error) => {
  console.log("Error en el servidor:", error);
});

console.log(USER_MONGO, PASS_MONGO, DB_MONGO);
mongoose.connect(
  `mongodb+srv://${USER_MONGO}:${PASS_MONGO}@cluster0.pnpufdn.mongodb.net/${DB_MONGO}?retryWrites=true&w=majority`,
  (error) => {
    if (error) {
      console.log("Error al conectar a la base de datos");
    } else {
      console.log("Conectado a la base de datos");
    }
  }
);
