export default class Contacts {
  constructor() {
    this.data = [];
  }
  get = () => {
    // la base de datos en memoria no require de mongoose
    //sino simplemente returnamos el arreglo llamado data
    return this.data;
  };
  create = (contact) => {
    this.data.push(contact);
  };
}
