import express from "express";
import cookieParser from "cookie-parser";
import loginRoute from "./routes/login.routes.js";
import validateRoute from "./routes/validate.routes.js";
import initializePassport from "./passport.config.js";
import passport from "passport";
import { passportCall } from "./utils.js";
const app = express();

app.use("/", express.static("public"));
app.use(express.json());
app.use(cookieParser());
initializePassport();
app.use(passport.initialize());
app.use(express.urlencoded({ extended: true }));

app.use("/login", loginRoute);
app.use("/validate", validateRoute);
app.get("/current", passportCall("jwt"), (req, res) => {
  res.send(req.user);
});

const server = app.listen(3000, () => {
  console.log("Server running on port 3000");
});

server.on("error", (error) => {
  console.log("Error en servidor", error);
});
