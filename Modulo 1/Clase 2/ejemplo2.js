class Animal {
  // Propiedades
  name = "Garfield";
  type = "cat";

  // Métodos
  hablar() {
    return "Odio los lunes.";
  }
}

const animal = new Animal();

console.log(animal.name); // Garfield
console.log(animal.type); // cat
console.log(animal.hablar()); // Odio los lunes.
/*
    class Animal {
        name;                 // Propiedad (variable de clase sin valor definido)
      
        constructor(name) {
          this.name = name;   // Hacemos referencia a la propiedad name del objeto instanciado
        }
      }

        const animal = new Animal("Garfield");
        console.log(animal.name); // Garfield
        */
