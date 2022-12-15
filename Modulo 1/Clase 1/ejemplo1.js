let myList = [];

const mostrarLista = (list) => {
  if (list.length === 0) {
    console.log("La lista está vacía");
  } else {
    //list.forEach((valor) => console.log(valor));
    for (let i = 0; i < list.length; i++) {
      console.log(list[i]);
    }
    let textoLongitud = `La lista tiene ${list.length} elementos`;
    console.log(textoLongitud);
  }
};
myList = ["Juan", "Pedro", "Luis"];
//myList.push("Ana");
//myList.push("Jose");
//myList.push("Emiliano");
//myList.push("Maties");

mostrarLista(myList);
