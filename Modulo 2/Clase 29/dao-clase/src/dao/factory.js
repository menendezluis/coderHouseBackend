import config from "../config/config.js";

export let Contacts;
switch (config.persistence) {
  case "MONGO":
    const connection = mongoose.connect("URL CONEXION DE MONGO");
    const { default: ContactsMongo } = await import(
      "./mongo/contacts.mongo.js"
    );
    Contacts = ContactsMongo;
    break;
  case "MEMORY":
    const { default: ContactMemory } = await import(
      "./memory/contacts.memory.js"
    );
    Contacts = ContactMemory;
    break;
}

export default Contacts;
