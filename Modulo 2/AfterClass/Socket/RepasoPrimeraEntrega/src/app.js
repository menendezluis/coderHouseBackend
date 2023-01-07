import express from "express";
import productRouter from "./routes/products.router.js";
import cartRouter from "./routes/carts.router.js";

const PORT = 3000;

const app = express();
app.use(express.json());

app.use(express.static("public"));
app.use("/api/carts", cartRouter);
app.use("/api/products", productRouter);

app.listen(PORT, () => {
  console.log(`Iniciado en el puerto ${PORT}`);
});
