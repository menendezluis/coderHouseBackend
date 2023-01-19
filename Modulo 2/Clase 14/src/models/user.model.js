import mongoose from "mongoose";

const useCollection = "usuarios";

const userSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  email: {
    type: String,
    unique: true,
  },
});

export const userModel = mongoose.model(useCollection, userSchema);
