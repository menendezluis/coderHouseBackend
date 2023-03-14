import { Router } from "express";
import ProductDTO from "../dao/DTOs/product.dto.js";
import { productsService } from "../dao/repository/index.js";
const router = Router();

router.get("/", async (req, res) => {
  let result = await productsService.getProducts();
  res.send({ status: "success", payload: result });
});

router.post("/", async (req, res) => {
  let { name, last_name, phone } = req.body;
  let product = new ProductDTO({ name, last_name, phone });

  let result = await productsService.createProduct(product);
  res.send({ status: "success", payload: result, product });
});

export default router;
