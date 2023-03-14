import productsModel from "./models/Products.js";

export default class Products {
  constructor() {}
  get = async () => {
    let contacts = await productsModel.find();
    return contacts;
  };
  create = async (contact) => {
    let newContact = new productsModel(contact);
    let result = await newContact.save();
    return result;
  };
  update = async (id, contact) => {
    let result = await productsModel.findByIdAndUpdate(id, contact);
    return result;
  };
  delete = async (id) => {
    let result = await productsModel.findByIdAndDelete(id);
    return result;
  };
}
