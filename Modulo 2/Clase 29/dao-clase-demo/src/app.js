import express from "express";
import contactsRouter from "./routes/contacts.routes.js";
import productsRouter from "./routes/products.routes.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
//db local
const connection = mongoose.connect("mongodb://127.0.0.1:27017/dao41105", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = app.listen(8080, () => console.log("servidor iniciado"));

server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.use("/contacts", contactsRouter);
app.use("/products", productsRouter);
