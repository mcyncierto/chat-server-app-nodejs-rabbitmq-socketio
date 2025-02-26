import { Router } from "express";
import messageController from "../controllers/messageController";
import { authMiddleware } from "../middlewares";

const messageRoutes = Router();

// @ts-ignore
messageRoutes.post("/send", authMiddleware, messageController.send);
messageRoutes.get(
  "/get/:receiverId",
  // @ts-ignore
  authMiddleware,
  messageController.getConversation
);

export default messageRoutes;
