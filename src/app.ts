import express, { type Application } from "express";
import { LoggerMiddleware } from "./middlewares/Logger.middleware.js";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";

const app : Application = express();

app.use(express.json());
app.use(LoggerMiddleware);

app.use("/api/user", userRouter);
app.use("/api/products",productRouter);

export default app;
