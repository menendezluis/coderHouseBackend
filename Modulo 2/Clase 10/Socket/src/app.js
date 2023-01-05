import { engine } from "express-handlebars";
import express from "express";
import viewsRoute from "./routes/views.router.js";
import utils from "./utils.js";
import { Server } from "socket.io";

const app = express();
const port = process.env.PORT || 3000;

const messages = [];

const httpServer = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const socketServer = new Server(httpServer);

socketServer.on("connection", (socket) => {
  console.log("Nuevo cliente conectado!");
  socket.emit("message", "Bienvenido al servidor!");
  socket.on("message", (data) => {
    console.log(data);
  });

  socket.on("new-message", (data) => {
    console.log(data);
    messages.push(data);

    socketServer.emit("messages", messages);
  });
});

// get messages from index.js

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");
app.use(express.static("public"));

app.use("/views", viewsRoute);
// Define a route to render the home template

app.get("/formulario", (req, res) => {
  let testUser = {
    title: "Este es un formulario",
    message: "Hola gracias por registrarte!",
    name: "Jose",
  };
  res.render("form", testUser);
});

// Start the server
