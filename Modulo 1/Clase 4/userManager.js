const fs = require("fs");
const path = require("path");

class UserManager {
  constructor() {
    this.users = [];
    this.file = path.join(__dirname, "users.json");
  }
  fileExists() {
    return fs.existsSync(this.file);
  }
  addUser(user) {
    return new Promise((resolve, reject) => {
      if (this.fileExists()) {
        console.log("El archivo existe");
        fs.readFile("./users.json", (err, data) => {
          if (err) {
            return console.log("Error al leer el archivo");
          }
          this.users = JSON.parse(data);
          this.users.push(user);
          fs.writeFile("./users.json", JSON.stringify(this.users), (err) => {
            if (err) {
              return console.log("Error al escribir el archivo");
            }
            resolve();
          });
        });
      } else {
        this.users.push(user);
        fs.writeFileSync(this.file, JSON.stringify(this.users), "utf8");
        resolve();
      }
    });
  }
  getUserById(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.file, "utf8", (err, data) => {
        if (err) {
          reject(err);
        }
        this.users = JSON.parse(data);
        const user = this.users.find((user) => user.id === id);
        resolve(user);
      });
    });
  }
  getUsers() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.file, "utf8", (err, data) => {
        if (err) {
          reject(err);
        }
        this.users = JSON.parse(data);
        resolve(this.users);
      });
    });
  }

  deleteUserById(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.file, "utf8", (err, data) => {
        if (err) {
          reject(err);
        }
        this.users = JSON.parse(data);
        this.users = this.users.filter((user) => user.id !== id);
        fs.writeFile;
      });
    });
  }
}

module.exports = UserManager;
