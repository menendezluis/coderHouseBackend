class contador {
  constructor() {
    this.contador = 0;
  }
  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }
  getContador() {
    return this.contador;
  }
}

const contador1 = new contador();
const contador2 = new contador();

contador1.incrementar();
contador1.incrementar();
contador1.incrementar();

contador2.incrementar();
contador2.incrementar();
contador2.decrementar();

console.log(contador1.getContador());
console.log(contador2.getContador());
