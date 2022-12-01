//En este ejemplo veremos como es una ejecucion sincrona y asincrona
/*
const miFuncionSincrona = () => {
  console.log("Iniciando tarea");
  console.log("Realizando operacion");
  [1, 2, 3, 4, 5].forEach((valor) => {
    console.log(valor);
  });
  for (let i = 4; i > 0; i--) {
    console.log(i);
  }
  console.log("Finalizando tarea");
};

console.log("Ejecucion sincrona");
miFuncionSincrona();
*/
//usando setinterval, se ejecuta cada 1 segundo
const miFuncionAsincrona = () => {
  console.log("Iniciando tarea");
  console.log("Realizando operacion");
  let contador = 0;
  let secondRound = false;
  const temporizador = setInterval(() => {
    console.log(contador);
    secondRound ? contador-- : contador++;
    if (contador === 5) {
      secondRound = true;
    }
    if (contador === 0 && secondRound) {
      console.log("Finalizando tarea");
      clearInterval(temporizador);
    }
  }, 1000);
};
console.log("Ejecucion asincrona");
miFuncionAsincrona();
