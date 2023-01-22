import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import pacientModel from "./routes/pacient.routes.js";

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use("/patients", pacientModel);

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(PORT, () => {
  console.log("Server up en puerto " + PORT);
});

//mongodb+srv://coderhouse:<password>@cluster0.pnpufdn.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
  "mongodb+srv://coderhouse:coder123@cluster0.pnpufdn.mongodb.net/pacientes?retryWrites=true&w=majority",
  (error) => {
    if (error) {
      console.log("Error de conexion");
      process.exit();
    } else {
      console.log("Conectado a la base de datos");
    }
  }
);

/*mongoose.connect(
    "mongodb+srv://coderhouse:coder123@cluster0.pnpufdn.mongodb.net/coderhouse?retryWrites=true&w=majority",
    (error) => {
      if (error) {
        console.log("Error de conexion");
        process.exit();
      } else {
        console.log("Conectado a la base de datos");
      }
    }
  )*/
