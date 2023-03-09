import mongoose from "mongoose";

export default class MongoSingleton {
  static #instance;

  constructor() {
    mongoose.connect("mongodb://127.0.0.1/27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  static getInstance() {
    if (this.#instance) {
      console.log("Ya esta conectado, no se puede crear de nuevo");
      return this.#instance;
    }
    this.#instance = new MongoSingleton();
    console.log("Conexion creada");
    return this.#instance;
  }
}
