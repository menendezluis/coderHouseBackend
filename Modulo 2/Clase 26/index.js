import express from "express";
import routerDatos from "./ruta/index.js";
import path from "path";
import { __dirname } from "./util.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const USER_MONGO = process.env.USER_MONGO;
const PASS_MONGO = process.env.PASS_MONGO;
const DB_MONGO = process.env.DB_MONGO;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
console.log(path.join(__dirname, "public"));
app.use("/api/datos", routerDatos);

const PORT = 3737;
console.log(__dirname);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));

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
