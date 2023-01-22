import mongoose from "mongoose";

const useCollection = "pacientes";

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  owner: { type: String, required: true },
  email: { type: String, required: true },
  telefono: {
    type: String,
    unique: true,
    required: true,
  },
  fecha: { type: String, required: true },
  hora: { type: String, required: true },
  sintomas: { type: String, required: true },
});

export const pacientModel = mongoose.model(useCollection, userSchema);
