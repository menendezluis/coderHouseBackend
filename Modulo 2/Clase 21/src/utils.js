import bcrypt from "bcrypt";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

export const createHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isValidPassword = (password, user) => {
  //console.log({ plainText: password, hash: user.password });
  return bcrypt.compareSync(password, user.password);
};
// bcrypt.compareSync(createHash(password), user.password);

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export default __dirname;
