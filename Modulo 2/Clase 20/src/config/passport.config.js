import passport from "passport";
import local from "passport-local";
import { createHash, isValidPassword } from "../utils.js";
import userService from "../model/user.model.js";

const LocalStrategy = local.Strategy;

const initializePassport = () => {
  passport.use(
    "register",
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: "email",
      },
      async (req, email, password, done) => {
        const { first_name, last_name, age } = req.body;

        try {
          let user = await userService.findOne({ email: username });
          if (user) {
            console.log("El usuario ya existe");
            return done(null, false);
          }
          const newUser = {
            first_name,
            last_name,
            email,
            age,
            password: createHash(password),
          };
          let result = await userService.create(newUser);
          return done(null, result);
        } catch (err) {
          return done("Error al obtener el usuario", false);
        }
      }
    )
  );
};

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    let user = await userService.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
export default initializePassport;
