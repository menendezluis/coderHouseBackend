import mongoose from "mongoose";

const contactsCollection = "contacts";

const contactSchema = mongoose.Schema({
  name: String,
  phone: String,
});

const operationsModel = mongoose.model(contactsCollection, contactSchema);

export default operationsModel;
