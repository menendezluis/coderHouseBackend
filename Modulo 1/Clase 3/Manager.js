const UserManager = require("./userManager");

const generadorNombresRandom = () => {
  const id = Math.floor(Math.random() * 100);
  const nombres = ["Juan", "Pedro", "Maria", "Jose", "Luis", "Ana", "Pablo"];
  const apellidos = [
    "Perez",
    "Gomez",
    "Lopez",
    "Martinez",
    "Gonzalez",
    "Sanchez",
    "Rodriguez",
  ];
  const nombre = nombres[Math.floor(Math.random() * nombres.length)];
  const apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
  const edad = Math.floor(Math.random() * 100);
  const courses = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Node",
    "MongoDB",
    "SQL",
    "Python",
    "Java",
  ];
  const idCourse = () => Math.floor(Math.random() * courses.length);
  const course = courses[(idCourse(), idCourse(), idCourse())];
  const email = `${nombre.toLowerCase()}.${apellido.toLowerCase()}@gmail.com`;
  return { id, nombre, apellido, edad, course, email };
};

const user = {
  id: 1,
  name: "Juan",
  lastname: "Perez",
  age: 30,
  email: "juan@gmail.com",
  courses: ["javascript", "node", "react"],
};
const user2 = {
  id: 2,
  name: "Maria",
  lastname: "Perez",
  age: 33,
  email: "maria@gmail.com",
  courses: ["ux/ui", "marketing digital", "fotografia"],
};
const userManager = new UserManager([], "users.json");

const runAwait = async () => {
  await userManager.addUser(user);
  await userManager.addUser(user2);
  await userManager.addUser(generadorNombresRandom());
  const users = await userManager.getUsers();
  console.log("getusers", users);
  const userFilter = await userManager.getUserById(1);
  console.log("filteruser", userFilter);
  //update user
  await userManager.updateUserById(1, {
    name: "Jose Carlos",
    lastname: "Perez",
    age: 30,
    email: "juancarlosperez@gmail.com",
    courses: ["javascript", "node", "react"],
  });
  userManager.getUsers().then((users) => {
    console.log(users);
  });

  // await userManager.deleteUserById(1);
  //const users2 = await userManager.getUsers();
  //await userManager.deleteUserById(2);
  //const users3 = await userManager.getUsers();
  //console.log("users3", users3);
};

runAwait();

/*
userManager.addUser(user);

userManager.addUser(user2);
userManager.getUserById(1).then((user) => {
  console.log(user);
});
userManager.getUserById(2).then((user) => {
  console.log(user);
});
userManager.getUsers().then((users) => {
  console.log(users);
});
//
//
*/
