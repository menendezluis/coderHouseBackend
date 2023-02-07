import express from "express";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import signupRouter from "./routes/signup.routes.js";
import loginRouter from "./routes/login.routes.js";
dotenv.config();

const PORT = process.env.PORT || 3333;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const STRING_CONNECTION = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.pnpufdn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "coderhouse",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: STRING_CONNECTION,
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      ttl: 30,
    }),
  })
);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/signup", signupRouter);
app.use("/login", loginRouter);

const server = app.listen(PORT, () => {
  console.log(`Iniciada aplicacion en puerto ${PORT}`);
});

server.on("error", (error) => {
  console.log("Error en servidor", error);
});

const environment = async () => {
  await mongoose
    .connect(STRING_CONNECTION)
    .then(() => console.log("Conectado a la base de datos"))
    .catch((error) => console.log("Error de conexion", error));
};

environment();
