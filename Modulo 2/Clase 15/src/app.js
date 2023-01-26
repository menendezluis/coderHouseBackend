import express from "express";
import mongoose from "mongoose";
import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js";
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/products", productRouter);
app.use("/carts", cartRouter);

app.listen(PORT, () => {
  console.log(`Iniciada aplicacion en puerto ${PORT}`);
});

mongoose.connect(
  "mongodb+srv://coderhouse:coder123@cluster0.pnpufdn.mongodb.net/ecommerce?retryWrites=true&w=majority",
  (error) => {
    if (error) {
      console.log("Error de conexion");
      process.exit();
    } else {
      console.log("Conectado a la base de datos");
    }
  }
);
