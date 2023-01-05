import express from "express";
import { Server } from "socket.io";
import { engine } from "express-handlebars";
import viewsRoute from "./routes/views.router.js";

const app = express();
const PORT = 3000;

const messages = [];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const httpServer = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("iniciado con socket.io");
});

const socketServer = new Server(httpServer);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/socketMessage", (req, res) => {
  const { message } = req.body;

  socketServer.emit("message", message);

  res.send("ok");
});
app.use("/views", viewsRoute);

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
