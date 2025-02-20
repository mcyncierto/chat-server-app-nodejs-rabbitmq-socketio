import { Router } from "express";
import authController from "../controllers/authController";

const userRouter: any = Router();

userRouter.post("/register", authController.register);
userRouter.post("/login", authController.login);

export default userRouter;
