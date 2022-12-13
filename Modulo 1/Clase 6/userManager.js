// Path: Modulo 1/Clase 6/userManager.js

const fs = require("fs");
const crypto = require("crypto");

class UserManager {
  constructor() {
    this.users = [];
  }

  createUser(name, lastName, username, password) {
    const user = {
      id: this.users.length + 1,
      name,
      lastName,
      username,
      password: crypto.createHash("sha256").update(password).digest("hex"),
    };

    if (
      name === undefined ||
      lastName === undefined ||
      username === undefined ||
      password === undefined
    ) {
      return console.log("Todos los campos son obligatorios");
    }

    let condition = this.users.find((user) => user.username === username);
    if (condition) {
      return console.log("El usuario ya existe");
    } else {
      this.users.push(user);
    }
  }

  getUsers() {
    return this.users;
  }

  getUserById(id) {
    let myID = parseInt(id);
    let myUser = null;
    this.users.forEach((user) => {
      if (user.id === myID) {
        myUser = user;
      }
    });
    if (myUser === null) {
      return console.log("No existe el usuario");
    } else {
      return myUser;
    }
  }

  getUserByUsername(username) {
    let myUsername = username;
    let myUser = null;
    this.users.forEach((user) => {
      if (user.username === myUsername) {
        myUser = user;
      }
    });
    if (myUser === null) {
      return console.log("No existe el usuario");
    } else {
      return myUser;
    }
  }

  deleteUser(username, password) {
    let myUsername = username;
    let myPassword = crypto.createHash("sha256").update(password).digest("hex");
    let myUser = null;
    this.users.forEach((user) => {
      if (user.username === myUsername && user.password === myPassword) {
        myUser = user;
        console.log("El usuario se encontro, se eliminara");
      }
    });
    if (myUser === null) {
      return console.log("No existe el usuario");
    } else {
      let index = this.users.indexOf(myUser);
      this.users.splice(index, 1);
    }
  }

  updateUser(
    username,
    password,
    newName,
    newLastName,
    newUsername,
    newPassword
  ) {
    let myUsername = username;
    let myPassword = crypto.createHash("sha256").update(password).digest("hex");
    let myUser = null;
    this.users.forEach((user) => {
      if (user.username === myUsername && user.password === myPassword) {
        myUser = user;
      }
    });
    if (myUser === null) {
      return console.log("No existe el usuario");
    } else {
      myUser.name = newName;
      myUser.lastName = newLastName;
      myUser.username = newUsername;
      myUser.password = crypto
        .createHash("sha256")
        .update(newPassword)
        .digest("hex");
    }
  }

  saveUsers() {
    fs.writeFileSync("users.json", JSON.stringify(this.users));
  }
  saveUsersAsync() {
    fs.writeFile("users.json", JSON.stringify(this.users), (err) => {
      if (err) {
        console.log("Error al guardar el archivo");
      }
    });
  }

  loadUsers() {
    this.users = JSON.parse(fs.readFileSync("users.json"));
  }

  loadUsersAsync() {
    fs.readFile("users.json", (err, data) => {
      if (err) {
        console.log("Error al leer el archivo");
      }
      this.users = JSON.parse(data);
    });
  }
}

module.exports = UserManager;
