import express, { Express } from "express";
import messageRoutes from "./routes/messageRoute";
import { errorConverter, errorHandler } from "./middlewares";

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(messageRoutes);
app.use(errorConverter);
app.use(errorHandler);

export default app;
