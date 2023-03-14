import contactsModel from "../models/contacts.js";

//sabemos que find corresponde a mongo
//sin embargo, lo abstraemos en un metodo
//get para mantener el carcter intercambiable
export default class Contacts {
  constructor() {}
  get = async () => {
    let contacts = await contactsModel.find();
    return contacts;
  };
}
