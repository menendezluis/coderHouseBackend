import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  persistence: process.env.PERSISTENCE,
  mongoUrl: process.env.MONGO_URL,
};
