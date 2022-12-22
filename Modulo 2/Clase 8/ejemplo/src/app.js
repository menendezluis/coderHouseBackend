import express from "express";
import petsRouter from "./routes/pets.router.js";
import userRouter from "./routes/user.router.js";
import alumnosRouter from "./routes/alumnos.router.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api/pets", petsRouter);
app.use("/api/user", userRouter);
app.use("/api/alumnos", alumnosRouter);

app.listen(port, () => {
  console.log(`Iniciado en http://localhost:${port}`);
});
