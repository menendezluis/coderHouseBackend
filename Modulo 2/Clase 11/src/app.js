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

app.get("/messages", (req, res) => {
  res.json(messages);
});

socketServer.on("connection", (socket) => {
  console.log("Nuevo cliente conectado!");
  socket.on("new-user", (data) => {
    socket.user = data.user;
    socket.id = data.id;
    socketServer.emit("new-user-connected", {
      user: socket.user,
      id: socket.id,
    });
  });
  socket.on("message", (data) => {
    messages.push(data);
    socketServer.emit("messageLogs", messages);
  });
});
