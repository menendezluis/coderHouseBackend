import express from "express";
import contactsRouter from "./routes/contacts.routes.js";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/dao41105", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(8080, () => console.log("servidor iniciado"));

app.use("/contacts", contactsRouter);
