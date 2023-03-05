import express from "express";
import { engine } from "express-handlebars";
import viewRoutes from "./routes/views.routes.js";
import sessionRoutes from "./routes/session.routes.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import passport from "passport";
import { isValidPassword } from "./utils.js";
import initializePassport from "./config/passport.config.js";
import session from "express-session";
dotenv.config();

const PORT = process.env.PORT || 3838;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const STRING_CONNECTION = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.pnpufdn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();
app.set("view engine", "ejs");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");
app.use(express.json());

initializePassport();
app.use(
  session({
    secret: "coderhouse",
  })
);
app.use(passport.initialize());

app.use(express.urlencoded({ extended: true }));

app.use("/", viewRoutes);
app.use("/api/sessions", sessionRoutes);
///api/sessions/githubcallback
const server = app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto 3838");
});

server.on("error", (error) => {
  console.log("Error en servidor", error);
});
const environment = async () => {
  await mongoose
    .connect(STRING_CONNECTION)
    .then(() => console.log("Conectado a la base de datos"))
    .catch((error) => console.log("Error de conexion", error));
};

environment();

/*import express from "express";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import passport from "passport";
import local from "passport-local";



import signupRouter from "./routes/signup.routes.js";
import loginRouter from "./routes/login.routes.js";
import forgotRouter from "./routes/forgot.routes.js";
import userService from "./model/user.model.js";
dotenv.config();

const PORT = process.env.PORT || 3333;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const STRING_CONNECTION = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.pnpufdn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();
const router = express.Router();
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "coderhouse",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: STRING_CONNECTION,
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      ttl: 30,
    }),
  })
);

const LocalStrategy = local.Strategy;
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/forgot", forgotRouter);

router.post(
  "/register",
  passport.authenticate("register", {
    successRedirect: "/signup",
    failureRedirect: "/forgot",
  }),
  (req, res) => {
    res.send({ status: "success", message: "user Registered" });
  }
);

router.get("/failRegister", (req, res) => {
  res.send({ status: "fail", message: "user not Registered" });
});

passport.use(
  "login",
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await userService.findOne({ email: email });
        if (!user) {
          console.log("User not found");
          return done(null, false, { message: "User not found" });
        }
        if (!isValidPassword(user, password)) {
          console.log("Password incorrect");
          return done(null, false, { message: "Password incorrect" });
        }
      } catch (error) {}
    }
  )
);

router.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/faillogin" }),
  async (req, res) => {
    if (!req.user) {
      res.send({ status: "fail", message: "user not found" });
    }
    req.session.user = {
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      email: req.user.email,
      age: req.user.age,
    };
    res.send({ status: "success", message: "user found", payload: req.user });
  }
);

router.get("/faillogin", (req, res) => {
  res.send({ status: "fail", message: "failed login" });
});
const server = app.listen(PORT, () => {
  console.log(`Iniciada aplicacion en puerto ${PORT}`);
});

server.on("error", (error) => {
  console.log("Error en servidor", error);
});

const environment = async () => {
  await mongoose
    .connect(STRING_CONNECTION)
    .then(() => console.log("Conectado a la base de datos"))
    .catch((error) => console.log("Error de conexion", error));
};

environment();
*/
