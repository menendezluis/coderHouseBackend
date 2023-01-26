import mongoose from "mongoose";

const useCollection = "carts";

const userSchema = new mongoose.Schema({
  products: Array,
});

export const cartModel = mongoose.model(useCollection, userSchema);
