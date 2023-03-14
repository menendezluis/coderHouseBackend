export default class Contacts {
  constructor() {
    this.data = [];
  }
  get = () => {
    return this.data;
  };
  create = (contact) => {
    this.data.push(contact);
  };
  update = (id, contact) => {
    let index = this.data.findIndex((contact) => contact.id === id);
    this.data[index] = contact;
  };
  delete = (id) => {
    let index = this.data.findIndex((contact) => contact.id === id);
    this.data.splice(index, 1);
  };
}
