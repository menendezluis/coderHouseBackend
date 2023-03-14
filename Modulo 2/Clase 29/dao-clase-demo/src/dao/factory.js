import config from "../config/config.js";
import mongoose from "mongoose";
let Contacts;
let Products;
switch (config.persistence) {
  case "MONGO":
    const connection = mongoose.connect(config.mongoUrl);
    const { default: ContactsMongo } = await import(
      "./mongo/contacts.mongo.js"
    );
    const { default: ProductsMongo } = await import(
      "./mongo/products.mongo.js"
    );
    Contacts = ContactsMongo;
    Products = ProductsMongo;
    break;
  case "MEMORY":
    const { default: ContactMemory } = await import(
      "./memory/contacts.memory.js"
    );
    const { default: ProductsMemory } = await import(
      "./memory/products.memory.js"
    );
    Products = ProductsMemory;
    Contacts = ContactMemory;
    break;
}
export { Contacts, Products };
