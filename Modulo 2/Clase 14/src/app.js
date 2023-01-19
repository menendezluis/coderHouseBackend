import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js";
import studentRouter from "./routes/student.routes.js";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/users", userRouter);
app.use("/students", studentRouter);

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(PORT, () => {
  console.log("Server up en puerto " + PORT);
});

//mongodb+srv://coderhouse:<password>@cluster0.pnpufdn.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
  "mongodb+srv://coderhouse:coder123@cluster0.pnpufdn.mongodb.net/colegio?retryWrites=true&w=majority",
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
