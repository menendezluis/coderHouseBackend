import mongoose from "mongoose";

const useCollection = "estudiantes";

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  dni: {
    type: String,
    unique: true,
    required: true,
  },
  curso: { type: String, required: true },
  nota: { type: Number, required: true },
});

export const studentModel = mongoose.model(useCollection, userSchema);
