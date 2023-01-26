import mongoose from "mongoose";
import { productModel } from "../../models/product.model.js";
import { cartModel } from "../../models/cart.model.js";

class ProductFileManager {
  async read() {
    try {
      const products = await productModel.find();
      return products;
    } catch (err) {
      throw err;
    }
  }

  async create(product) {
    try {
      const newProduct = new productModel(product);
      await newProduct.save();
      return product;
    } catch (err) {
      throw err;
    }
  }

  async update(id, product) {
    try {
      const updatedProduct = await productModel.findByIdAndUpdate(id, product);
      return updatedProduct;
    } catch (err) {
      throw err;
    }
  }

  async delete(id) {
    try {
      const deletedProduct = await productModel.findByIdAndDelete(id);
      return deletedProduct;
    } catch (err) {
      throw err;
    }
  }
}

class CartFileManager {
  async read() {
    try {
      const carts = await cartModel.find();
      return carts;
    } catch (err) {
      throw err;
    }
  }

  async create(cart) {
    try {
      const newCart = new cartModel(cart);
      await newCart.save();
      return cart;
    } catch (err) {
      throw err;
    }
  }

  async update(id, product) {
    try {
      const myProduct = {
        title: product.title,
        quantity: 1,
      };
      const readPreviousCart = await cartModel.findById(id);
      const previousCart = readPreviousCart.products;

      let checkExists = previousCart.findIndex(
        (tempProd) => tempProd.title === product.title
      );
      if (checkExists !== -1) {
        myProduct.quantity = previousCart[checkExists].quantity + 1;
      }

      previousCart.splice(checkExists, 1, myProduct);
      const cart = { products: previousCart };

      const updatedCart = await cartModel.findByIdAndUpdate(id, cart);
      return updatedCart;
    } catch (err) {
      throw err;
    }
  }

  async delete(id) {
    try {
      const deletedCart = await cartModel.findByIdAndDelete(id);
      return deletedCart;
    } catch (err) {
      throw err;
    }
  }

  async deleteProduct(id, product) {
    try {
      const readPreviousCart = await cartModel.findById(id);
      const previousCart = readPreviousCart.products;

      let checkExists = previousCart.findIndex(
        (tempProd) => tempProd.title === product.title
      );
      if (checkExists !== -1) {
        previousCart.splice(checkExists, 1);
      }

      const cart = { products: previousCart };

      const updatedCart = await cartModel.findByIdAndUpdate(id, cart);
      return updatedCart;
    } catch (err) {
      throw err;
    }
  }

  async decreaseProduct(id, product) {
    try {
      const readPreviousCart = await cartModel.findById(id);
      const previousCart = readPreviousCart.products;

      let checkExists = previousCart.findIndex(
        (tempProd) => tempProd.title === product.title
      );
      if (checkExists !== -1) {
        if (previousCart[checkExists].quantity > 1) {
          previousCart[checkExists].quantity -= 1;
        } else {
          previousCart.splice(checkExists, 1);
        }
      }

      const cart = { products: previousCart };

      const updatedCart = await cartModel.findByIdAndUpdate(id, cart);
      return updatedCart;
    } catch (err) {
      throw err;
    }
  }
}

export default { ProductFileManager, CartFileManager };
