import passport from "passport";
import jwt from "passport-jwt";

const JwtStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const cookierExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["coderCookieToken"];
  }
  return token;
};

const initializePassport = () => {
  passport.use(
    "jwt",
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJWT.fromExtractors([cookierExtractor]),
        secretOrKey: "codersecret",
      },
      async (jwt_payload, done) => {
        try {
          return done(null, jwt_payload);
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );
};
export default initializePassport;
