function funA() {
  console.log("funA");
  funB();
}
function funB() {
  console.log("funB");
  funC();
}
function funC() {
  console.log("funC");
  return "me detuve en C";
  funD();
}

function funD() {
  console.log("funD");
  funE();
}
function funE() {
  console.log("funE");
  funF();
}
function funF() {
  console.log("funF");
}

console.log(funA());
//funE();
