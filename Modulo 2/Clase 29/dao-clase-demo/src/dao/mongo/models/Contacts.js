import mongoose from "mongoose";

const contactCollection = "contacts";
const contactSchema = new mongoose.Schema({
  name: String,
  last_name: String,
  phone: String,
  active: Boolean,
});

const model = mongoose.model(contactCollection, contactSchema);

export default model;
