class ProductManager {
  constructor() {
    this.products = [];
  }

  agregarProducto(title, description, price, thumbnail, code, stock) {
    const producto = {
      id: this.products.length + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    //todos son obligatorios
    if (
      title === undefined ||
      description === undefined ||
      price === undefined ||
      thumbnail === undefined ||
      code === undefined ||
      stock === undefined
    ) {
      return console.log("Todos los campos son obligatorios");
    }

    let condition = this.products.find((producto) => producto.code === code);
    if (condition) {
      return console.log("El producto ya existe");
    } else {
      this.products.push(producto);
    }
  }

  updateProduct(id, title, description, price, thumbnail, code, stock) {
    let myID = parseInt(id);
    let miPRoducto = null;
    this.products.forEach((producto) => {
      if (producto.id === myID) {
        miPRoducto = producto;
      }
    });
    if (miPRoducto === null) {
      return console.log("No existe el producto");
    } else {
      if (title !== undefined) {
        miPRoducto.title = title;
      }
      if (description !== undefined) {
        miPRoducto.description = description;
      }
      if (price !== undefined) {
        miPRoducto.price = price;
      }
      if (thumbnail !== undefined) {
        miPRoducto.thumbnail = thumbnail;
      }
      if (code !== undefined) {
        miPRoducto.code = code;
      }
      if (stock !== undefined) {
        miPRoducto.stock = stock;
      }
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    let myID = parseInt(id);
    let miPRoducto = null;
    this.products.forEach((producto) => {
      if (producto.id === myID) {
        miPRoducto = producto;
      }
    });
    if (miPRoducto === null) {
      return console.log("No existe el producto");
    } else {
      return miPRoducto;
    }
  }
}

const productManager = new ProductManager();
productManager.agregarProducto(
  "Remera",
  "Remera de algodon",
  1000,
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.vecteezy.com%2Ffree-png-es%2Fremera&psig=AOvVaw1ZTU6UeioevU4qe9gMA_FL&ust=1670082090683000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPD4keCi2_sCFQAAAAAdAAAAABAE",
  "1234",
  10
);
productManager.agregarProducto(
  "Remera",
  1000,
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.vecteezy.com%2Ffree-png-es%2Fremera&psig=AOvVaw1ZTU6UeioevU4qe9gMA_FL&ust=1670082090683000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPD4keCi2_sCFQAAAAAdAAAAABAE",
  "12345",
  10
);

console.log(productManager.getProducts());

console.log("busqueda de producto", productManager.getProductById(1));

productManager.updateProduct(
  1,
  "Rinonera",
  "Rinonera",
  1000,
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.vecteezy.com%2Ffree-png-es%2Fremera&psig=AOvVaw1ZTU6UeioevU4qe9gMA_FL&ust=1670082090683000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPD4keCi2_sCFQAAAAAdAAAAABAE",
  "1234",
  10
);

console.log(productManager.getProducts());
