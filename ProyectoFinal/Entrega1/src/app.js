import express from "express";
import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
