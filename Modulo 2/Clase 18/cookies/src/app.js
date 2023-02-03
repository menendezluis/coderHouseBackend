import express, { response } from "express";
import cookieParser from "cookie-parser";
import { engine } from "express-handlebars";
import session from "express-session";
import viewRouter from "./routes/views.router.js";

const PORT = 3000;
const app = express();

function auth(req, res, next) {
  console.log(req);
  if (req.session?.user === "pepe" && req.session?.admin) {
    return next();
  } else {
    res.status(401).send("No estas autorizado");
  }
}
app.use(
  session({
    secret: "secretCoder",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");
app.use(express.static("public"));

//app.use("/views", viewRouter);
app.use("/", viewRouter);
app.use(cookieParser("S0y un s3cr3t0"));

/*app.get("/", (req, res) => {
  res.send("Hello World!");
});*/

app.get("/session", (req, res) => {
  if (req.session.counter) {
    req.session.counter++;
    res.send(`Contador: ${req.session.counter}`);
  } else {
    req.session.counter = 1;
    res.send("Bienvenido eres el primer visitante");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Sesion finalizada");
    }
  });
});

app.get("/privada", auth, (req, res) => {
  res.send(`Bienvenido a la zona privada, Don ${req.session.user}}`);
});

app.get("/login", (req, res) => {
  const { username, password } = req.query;

  if (username !== "pepe" && password !== "pepepass") {
    res.send("Usuario o contraseña incorrectos");
  } else {
    req.session.user = username;
    req.session.admin = true;
    if (req.session.counter) {
      req.session.counter++;
      res.send(` haz visitado el sitio: ${req.session.counter}`);
    } else {
      req.session.counter = 1;
    }
    res.send(
      `Bienvenido ${req.session.user}, haz visitado el sitio: ${req.session.counter}`
    );
  }
});
app.get("/setCookie", (req, res) => {
  res.cookie("CoderCookie", "Esta es una cookie muy poderosa", {
    maxAge: 900000,
    httpOnly: true,
  });
  res.send("Cookie seteada");
});

app.post("/setSignedCookie", (req, res) => {
  const { name, email } = req.body;
  res.cookie("name", name, {
    maxAge: 100000,
    httpOnly: true,
    signed: true,
  });
  res.cookie("email", email, {
    maxAge: 100000,
    httpOnly: true,
    signed: true,
  });
  res.send("Cookie seteada");
});

/*res.cookie("SignedCookie", "Esta es una cookie muy poderosa", {
    maxAge: 900000,
    httpOnly: true,
    signed: true,
  });
  res.send("Cookie seteada"); 
});
*/
app.get("/getSignedCookie", (req, res) => {
  res.send(req.signedCookies);
});

app.get("/getCookie", (req, res) => {
  res.send(req.cookies);
});

app.get("/clearCookie", (req, res) => {
  res.clearCookie("name");
  res.send("Cookie borrada");
});

const server = app.listen(PORT, () => {
  console.log(`Iniciada aplicacion en puerto ${PORT}`);
});

server.on("error", (error) => {
  console.log("Error en el servidor: ", error);
});
