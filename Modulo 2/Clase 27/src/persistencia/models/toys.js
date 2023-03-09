import mongoose from "mongoose";

const toySchema = new mongoose.Schema({
  title: String,
  price: Number,
  thumbnail: String,
  description: String,
});

const toyModel = mongoose.model("toy", toySchema);

export { toyModel };
