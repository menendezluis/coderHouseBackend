export default class Products {
  constructor() {
    this.data = [];
  }
  get = () => {
    return this.data;
  };
  create = (product) => {
    this.data.push(product);
  };
  update = (id, product) => {
    let index = this.data.findIndex((product) => product.id === id);
    this.data[index] = product;
  };
  delete = (id) => {
    let index = this.data.findIndex((product) => product.id === id);
    this.data.splice(index, 1);
  };
}
