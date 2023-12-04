import { Router } from "express";
import { verifyToken } from "../middlewares/AuthMiddleware";
import { addOrder } from "../controllers/OrderControllers";

export const ordersRoutes = Router();

ordersRoutes.post("/create", verifyToken, addOrder);
