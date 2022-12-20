//importar ProductManager
import ProductManager_External from "./ProductManager.js";
//instanciar ProductManager
const ProductManager = new ProductManager_External("./products.json", []);

// manage async product manager

const manageProductManager = async () => {
  // add product
  await ProductManager.addProduct({
    title: "Remera",
    description: "Remera de algodon",
    price: 1000,
    thumbnail: "https://coderhouse.com",
    code: "123456",
    stock: 10,
  });
  await ProductManager.addProduct({
    title: "Camisa",
    description: "Camisa de algodon",
    price: 2222,
    thumbnail: "https://google.com.ar",
    code: "234567",
    stock: 5,
  });
  await ProductManager.addProduct({
    title: "Cinturon",
    description: "Cinturon de cuero",
    price: 789876554,
    thumbnail: "https://google.com.ar",
    code: "9876543",
    stock: 111,
  });
  await ProductManager.addProduct({
    title: "Pantalon",
    description: "Pantalon de mezclilla",
    price: 3333,
    thumbnail: "https://google.com.ar",
    code: "3435353",
    stock: 15,
  });
  await ProductManager.addProduct({
    title: "Pantalon",
    description: "Pantalon de mezclilla",
    price: 3333,
    thumbnail: "https://google.com.ar",
    code: "3435353",
    stock: 15,
  });
  await ProductManager.addProduct({
    title: "Pantalon",
    description: "Pantalon de mezclilla",
    price: 3333,
    thumbnail: "https://google.com.ar",
    code: "3435353",
    stock: 15,
  });
  await ProductManager.addProduct({
    title: "Pantalon",
    description: "Pantalon de mezclilla",
    price: 3333,
    thumbnail: "https://google.com.ar",
    code: "3435353",
    stock: 15,
  });
  await ProductManager.addProduct({
    title: "Pantalon",
    description: "Pantalon de mezclilla",
    price: 3333,
    thumbnail: "https://google.com.ar",
    code: "3435353",
    stock: 15,
  });
  await ProductManager.addProduct({
    title: "Pantalon",
    description: "Pantalon de mezclilla",
    price: 3333,
    thumbnail: "https://google.com.ar",
    code: "3435353",
    stock: 15,
  });
  // get products
  const products = await ProductManager.getProducts();
  console.log(products);

  // get product by id
  const product = await ProductManager.getProductById(2);
  console.log(product);

  // update product
  await ProductManager.updateProduct(
    3,
    "Zapatillas",
    "Zapatillas de caucho",
    777,
    "https://coderhouse.com",
    "7777",
    7
  );

  // delete product
  await ProductManager.deleteProduct(2);
  await ProductManager.deleteProduct(4);
  await ProductManager.deleteProduct(5);
  await ProductManager.deleteProduct(6);

  const products2 = await ProductManager.getProducts();
  console.log("produts 2", products2);
};

manageProductManager();

export const getAllProducts = async () => {
  const products = await ProductManager.getProducts();
  return products;
};

export default ProductManager;
