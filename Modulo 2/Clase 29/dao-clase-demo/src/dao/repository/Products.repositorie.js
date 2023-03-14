import ProductDTO from "../DTOs/product.dto.js";
export default class ProductRepository {
  constructor(dao) {
    this.dao = dao;
  }
  async getProducts() {
    let products = await this.dao.get();
    return products;
  }
  async createProduct(product) {
    let productToInsert = new ProductDTO(product);
    let result = await this.dao.create(productToInsert);
    return result;
  }
}
