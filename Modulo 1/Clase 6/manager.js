const UserManager = require("./userManager");

const userManager = new UserManager([]);

//creamos un nuevo usuario
userManager.createUser("Juan", "Perez", "jperez", "123456");
//userManager.getUserById(1);
//userManager.getUserByUsername("jperez");

//creamos otro usuario
userManager.createUser("Maria", "Gomez", "mgomez", "123456");
//userManager.getUserById(2);
//userManager.getUserByUsername("mgomez");
//console.log(userManager.getUsers());

//creamos otro usuario
userManager.createUser("Pedro", "Gomez", "pgomez", "fedcba");
//userManager.getUserById(3);
//userManager.getUserByUsername("pgomez");
//utf-8
//creamos otro usuario
userManager.createUser("Juan", "Jacinto", "jjacinto", "abcdef");
//userManager.getUserById(4);
//userManager.getUserByUsername("jjacinto");

//imprimimos todos los usuarios
//console.log(userManager.getUsers());

//imprimimos todos los usuarios
console.log(userManager.getUsers());

//borramos el usuario con username jjacinto con contraseña incorrecta
userManager.deleteUser("pgomez", "fedcba");
console.log(userManager.getUsers());
//imprimimos todos los usuarios
//console.log(userManager.getUsers());
//borramos el usuario con username pgomez con contraseña fedcba
//userManager.deleteUser("jjacinto", "abcdef");

//imprimimos todos los usuarios
//console.log(userManager.getUsers());

// guardamos los usuarios en un archivo
/*userManager.saveUsers();

// leemos los usuarios de forma asincronica
userManager.loadUsersAsync();

// leemos los usuarios de forma sincronica
userManager.loadUsers();


*/
