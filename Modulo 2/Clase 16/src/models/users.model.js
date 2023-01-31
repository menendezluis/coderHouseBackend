import mongoose from "mongoose";

const useCollection = "usuarios";

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    index: true,
  },
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  gender: String,
});

export const userModel = mongoose.model(useCollection, userSchema);
