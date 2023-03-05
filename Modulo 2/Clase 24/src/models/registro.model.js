import mongoose from "mongoose";

const registroCollection = "Registro";

const registroSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
});

const Registro = mongoose.model(registroCollection, registroSchema);

export default Registro;
