import express from "express";
import userRouter from "./routes/users.routes.js";
import businessRouter from "./routes/business.routes.js";
import orderRouter from "./routes/orders.routes.js";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/business", businessRouter);
app.use("/api/orders", orderRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
