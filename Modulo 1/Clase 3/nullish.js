//Nulish
const miTexto = null ?? "default string";
//console.log(miTexto);
// expected output: "default string"

const miNumero = 0 ?? 42;
//console.log("miNumero", miNumero);
// expected output: 0

//Escrito de otra forma con ternarios seria
const miTextoTernario = null ? null : "default string";
console.log(miTextoTernario);

const miNumeroTernario = 0 ? 0 : 42;
console.log("miNumeroTernario", miNumeroTernario);
