import express from "express";
import userRouter from "./routes/user.router.js";
import petsRouter from "./routes/pets.router.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/pets", petsRouter);

app.listen(port, () => {
  console.log(`hands on lab http://localhost:${port}`);
});
