import * as dotenv from "dotenv";

dotenv.config();

const { USER_MONGO, PASS_MONGO, DB_MONGO } = process.env;
export { USER_MONGO, PASS_MONGO, DB_MONGO };
