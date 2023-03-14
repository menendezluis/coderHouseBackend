import ContactDTO from "../DTOs/contact.dto";
export default class ContactRepository {
  constructor(dao) {
    this.dao = dao;
  }
  async getContacts() {
    let contacts = await this.dao.find();
    return contacts;
  }
  async createContact(contact) {
    let contactToInsert = new ContactDTO(contact);
    let result = await this.dao.create(contactToInsert);
    return result;
  }
}
