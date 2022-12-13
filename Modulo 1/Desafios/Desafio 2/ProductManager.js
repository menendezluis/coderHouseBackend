//Realizar una clase de nombre “ProductManager”, el cual permitirá trabajar con múltiples productos. Éste debe poder agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia de archivos (basado en entregable 1).
//La clase debe contar con una variable this.path y un arreglo vacio al iniciar, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.
/*Debe guardar objetos con el siguiente formato:
id (se debe incrementar automáticamente, no enviarse desde el cuerpo)
title (nombre del producto)
description (descripción del producto)
price (precio)
thumbnail (ruta de imagen)
code (código identificador)
stock (número de piezas disponibles)
Debe tener un método addProduct el cual debe recibir un objeto con el formato previamente especificado, asignarle un id autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo).
Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo.
Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con el id especificado y devolverlo en formato objeto
Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID 
Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.
*/

// Path: Modulo 1/Desafios/Desafio 2/ProductManager.js
const fs = require("fs");

class ProductManager {
  constructor(path, products) {
    this.path = path;
    this.products = [];
  }

  addProduct(product) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          if (data) {
            this.products = JSON.parse(data);
          }
          this.products.push(product);
          fs.writeFile(
            this.path,
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
    return new Promise((resolve, reject) => {
      fs.readFile(this.path, "utf-8", (err, data) => {
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
      fs.readFile(this.path, "utf-8", (err, data) => {
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
      fs.readFile(this.path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          this.products = JSON.parse(data);
          const index = this.products.findIndex((product) => product.id === id);
          this.products[index] = product;
          fs.writeFile(
            this.path,
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
      fs.readFile(this.path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          this.products = JSON.parse(data);
          const index = this.products.findIndex((product) => product.id === id);
          this.products.splice(index, 1);
          fs.writeFile(
            this.path,
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

module.exports = ProductManager;
