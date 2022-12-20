// Path: Modulo 1/Desafios/Desafio 2/ProductManager.js
import fs from "fs";
import path from "path";

//use path
const __dirname = path.resolve();
const filePath = (tempPath) => path.join(__dirname, tempPath);

class ProductManager {
  constructor(path, products) {
    this.path = path;
    this.products = [];
  }

  addProduct(product) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath(this.path), "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
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

          fs.writeFile(
            filePath(this.path),
            JSON.stringify(this.products, null, "\t"),
            (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            }
          );
        }
      });
    });
  }

  getProducts() {
    console.log(filePath(this.path));
    return new Promise((resolve, reject) => {
      fs.readFile(filePath(this.path), "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          this.products = JSON.parse(data);
          resolve(this.products);
        }
      });
    });
  }

  getProductById(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath(this.path), "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          this.products = JSON.parse(data);
          const product = this.products.find((product) => product.id === id);
          resolve(product);
        }
      });
    });
  }

  updateProduct(id, product) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath(this.path), "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          this.products = JSON.parse(data);
          const index = this.products.findIndex((product) => product.id === id);
          this.products[index] = product;
          fs.writeFile(
            filePath(this.path),
            JSON.stringify(this.products, null, "\t"),
            (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            }
          );
        }
      });
    });
  }

  deleteProduct(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath(this.path), "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          this.products = JSON.parse(data);
          const index = this.products.findIndex((product) => product.id === id);
          this.products.splice(index, 1);
          fs.writeFile(
            filePath(this.path),
            JSON.stringify(this.products, null, "\t"),
            (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            }
          );
        }
      });
    });
  }
}

export default ProductManager;
