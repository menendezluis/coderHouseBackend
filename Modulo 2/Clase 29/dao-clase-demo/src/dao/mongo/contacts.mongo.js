import contactsModel from "./models/Contacts.js";

export default class Contacts {
  constructor() {}
  get = async () => {
    let contacts = await contactsModel.find();
    return contacts;
  };
  create = async (contact) => {
    let newContact = new contactsModel(contact);
    let result = await newContact.save();
    return result;
  };
  update = async (id, contact) => {
    let result = await contactsModel.findByIdAndUpdate(id, contact);
    return result;
  };
  delete = async (id) => {
    let result = await contactsModel.findByIdAndDelete(id);
    return result;
  };
}
