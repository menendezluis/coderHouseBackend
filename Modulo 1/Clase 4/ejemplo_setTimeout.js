//En este ejemplo veremos como es una ejecucion sincrona y asincrona

//ejemplo de ejecucion sincrona
/*const miFuncionSincrona = () => {
  console.log("uno");
  console.log("Dos");
  console.log("Tres");
  console.log("Cuatro");
  console.log("Cinco");
  console.log(6);
  console.log(7);
  console.log(8);
  console.log(9);
  console.log(10);
};
console.log("ejecicon sincrona");
miFuncionSincrona();
*/
//console.log("ejecicon sincrona");
//
//ejemplo de ejecucion asincrona
const miFuncionAsincrona = () => {
  const temporizador = (callback) =>
    setTimeout(() => {
      callback();
    }, 3000);

  const miCallback = () => {
    console.log("Tres");
    console.log("Cuatro");
    console.log("Cinco");
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
  };

  console.log("uno");
  console.log("Dos");
  temporizador(miCallback);
};

console.log("ejecucion asincrona");
miFuncionAsincrona();
