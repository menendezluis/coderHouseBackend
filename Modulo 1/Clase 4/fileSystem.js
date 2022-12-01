const { count } = require("console");
const fs = require("fs");
let existe = fs.existsSync("file.txt");
/*
if (existe) {
  // leo el archivo
  console.log("el archivo existe");
  const data = fs.readFileSync("./file.txt", "utf-8");
  console.log(data);
} else {
  // si el archivo no existe
  console.log("El archivo no existe");
  // creo el archivo
  fs.writeFileSync("miArchivo.txt", "Hello Node.js", "utf8");
  console.log("El archivo fue creado");
}
// anadir contenido al archivo
existe && fs.appendFileSync("miArchivo.txt", "Hola mundo");
const data = fs.readFileSync("file.txt", "utf8");
console.log("el contenido del archivo:", data);

// eliminar el archivo
const deleteFile = (file) => {
  fs.unlinkSync(file);
  console.log("El archivo fue eliminado");
};

deleteFile("./miArchivo.txt");

// Ejemplo fs Asincrono con callbacks

// si el archivo existe
fs.writeFile("miArchivo.txt", "Hello Node.js", "utf8", (err) => {
  if (err) {
    return console.log("Error al crear el archivo");
  }
  console.log("El archivo fue creado");
  fs.readFile("miArchivo.txt", "utf8", (err, data) => {
    if (err) {
      return console.log("Error al leer el archivo");
    }
    console.log("el contenido del archivo:", data);
    fs.appendFile("miArchivo.txt", "Mas contenido", (err) => {
      if (err) {
        return console.log("Error al anadir contenido al archivo");
      }
      console.log("El contenido fue anadido");
      fs.readFile("miArchivo.txt", "utf8", (err, data) => {
        if (err) {
          return console.log("Error al leer el archivo");
        }
        console.log("el contenido del archivo:", data);
        fs.unlink("miArchivo.txt", (err) => {
          if (err) {
            return console.log("Error al eliminar el archivo");
          }
          console.log("El archivo fue eliminado");
        });
      });
    });
  });
});
*/

// Ejemplo fs Asincrono con Promesas
/*
// si el archivo existe
const writeFile = (file, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, content, "utf8", (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile;
  });
};

const writeFilPromise = (file, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile;
  });
};

const appendFilePromise = (file, content) => {
  return new Promise((resolve, reject) => {
    fs.appendFile;
  });
};

const unlinkPromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.unlink;
  });
};

writeFile("miArchivo.txt", "Hello Node.js")
  .then(() => {
    console.log("El archivo fue creado");
    return readFile("miArchivo.txt");
  })
  .then((data) => {
    console.log("el contenido del archivo:", data);
    return appendFilePromise("miArchivo.txt", "Mas contenido");
  })
  .then(() => {
    console.log("El contenido fue anadido");
    return readFile("miArchivo.txt");
  })
  .then((data) => {
    console.log("el contenido del archivo:", data);
    return unlinkPromise("miArchivo.txt");
  })
  .then(() => {
    console.log("El archivo fue eliminado");
  })
  .catch((err) => {
    console.log("Error", err);
  });
*/
// Ejemplo fs Asincrono con Async/Await
/*
const operacionAsincrona = async () => {
  await fs.promises.writeFile("miArchivo.txt", "Hello Node.js");
  console.log("El archivo fue creado");

  const data = await fs.promises.readFile("miArchivo.txt");
  console.log("el contenido del archivo:", data);

  await fs.promises.appendFile("miArchivo.txt", "Mas contenido");
  console.log("El contenido fue anadido");

  const data2 = await fs.promises.readFile("miArchivo.txt");
  console.log("el contenido del archivo:", data2);

  await fs.promises.unlink("miArchivo.txt");
  console.log("El archivo fue eliminado");
};

operacionAsincrona();
*/
const miobjeto = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  direccion: {
    calle: "Av. Siempre Viva",
    numero: 123,
  },
};
const stringObject = JSON.stringify(miobjeto);
console.log(JSON.parse(stringObject));
