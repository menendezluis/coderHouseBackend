import crypto from "crypto";
export default class ProductDTO {
  constructor(contact) {
    this.name = contact.name;
    this.price = contact.price;
    this.code = contact.code;
    this.description = contact.description;
    this.id = crypto.randomBytes(16).toString("hex");
  }
}
