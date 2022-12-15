class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  static especie() {
    return "Humano";
  }

  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  }

  saludar() {
    console.log(
      `Hola, me llamo ${this.nombreCompleto} y tengo ${
        this.edad
      } años y soy ${Persona.especie()}`
    );
  }
}

class Tienda {
  constructor(manzana, peras, carne, jugos, dulces) {
    this.manzana = manzana;
    this.peras = peras;
    this.carne = carne;
    this.jugos = jugos;
    this.dulces = dulces;
  }

  venderManzana() {
    if (this.manzana - 1 >= 0) {
      this.manzana--;
      console.log(`Se vendio una manzana, quedan ${this.manzana} manzanas`);
    } else {
      console.log(`No hay mas manzanas`);
    }
  }
  static propietario() {
    return "Juan";
  }

  get saludar() {
    console.log(`Hola, soy ${Tienda.propietario()}`);
  }
}

const miObjectoConFunciones = {
  saludar: function () {
    console.log("Hola");
  },
  despedir() {
    console.log("Chau");
  },
};

//miObjectoConFunciones.saludar();
//miObjectoConFunciones.despedir();

const miTienda = new Tienda(10, 20, 30, 40, 50);
miTienda.saludar();
miTienda.propietario();
//miTienda.venderManzana();
const miTienda2 = new Tienda(40, 20, 30, 40, 50);
//miTienda2.venderManzana();

/*const miTienda1 = new Tienda(10, 20, 30, 40, 50);
  const miTienda2 = new Tienda(10, 20, 30, 40, 50);
  const miTienda3 = new Tienda(10, 20, 30, 40, 50);
  const miFecha = new Date();

const persona1 = new Persona("Juan", "Perez", 30);
const persona2 = new Persona("Maria", "Gonzalez", 21);

console.log(persona1.nombreCompleto);
console.log(persona1);
console.log(persona1.saludar());

console.log(persona2.nombreCompleto);
console.log(persona2);
*/
