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

const persona1 = new Persona("Juan", "Perez", 30);
const persona2 = new Persona("Maria", "Gonzalez", 21);

console.log(persona1.nombreCompleto);
console.log(persona1);
console.log(persona1.saludar());

console.log(persona2.nombreCompleto);
console.log(persona2);
