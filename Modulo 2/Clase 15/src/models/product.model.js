import mongoose from "mongoose";

const useCollection = "products";

const userSchema = new mongoose.Schema({
  title: String,
  description: String,
  code: String,
  price: Number,
  thumbnail: String,
  stock: Number,
  category: String,
  status: Boolean,
});

export const productModel = mongoose.model(useCollection, userSchema);
