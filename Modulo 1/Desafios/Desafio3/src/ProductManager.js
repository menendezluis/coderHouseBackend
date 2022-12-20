import fs from "fs";

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  async addProduct(product) {
    try {
      const data = await this.readFile();
      if (data) {
        this.products = JSON.parse(data);
      }
      product.id = this.products.length
        ? this.products.reduce(
            (max, product) => (product.id > max ? product.id : max),
            0
          ) + 1
        : 1;
      this.products.push(product);

      await this.writeFile(this.products);
    } catch (err) {
      throw err;
    }
  }

  async getProducts() {
    try {
      const data = await this.readFile();
      this.products = JSON.parse(data);
      return this.products;
    } catch (err) {
      throw err;
    }
  }

  async getProductById(id) {
    try {
      const data = await this.readFile();
      this.products = JSON.parse(data);
      const product = this.products.find((product) => product.id === id);
      return product;
    } catch (err) {
      throw err;
    }
  }

  async updateProduct(id, product) {
    try {
      const data = await this.readFile();
      this.products = JSON.parse(data);
      const index = this.products.findIndex((product) => product.id === id);
      this.products[index] = product;
      await this.writeFile(this.products);
    } catch (err) {
      throw err;
    }
  }

  async deleteProduct(id) {
    try {
      const data = await this.readFile();
      this.products = JSON.parse(data);
      const index = this.products.findIndex((product) => product.id === id);
      this.products.splice(index, 1);
      await this.writeFile(this.products);
    } catch (err) {
      throw err;
    }
  }

  //resolve error ENOENT: no such file or directory, open 'products.json'
  async readFile() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  async writeFile(data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.path, JSON.stringify(data, null, "\t"), (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  }
}

export default ProductManager;
