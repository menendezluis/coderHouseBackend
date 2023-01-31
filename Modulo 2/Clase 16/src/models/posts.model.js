import mongoose from "mongoose";

// postModel.model.js

const postSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Post", postSchema);
