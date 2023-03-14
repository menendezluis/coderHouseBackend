import mongoose from "mongoose";

const productCollection = "products";
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  code: String,
  price: Number,
});

const model = mongoose.model(productCollection, productSchema);

export default model;
