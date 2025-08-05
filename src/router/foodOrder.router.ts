import express from "express";
import { createFoodOrder } from "../controller/foodOrder/create-foodOrder.controller";
import { getOrder } from "../controller/foodOrder/get-foodOrders.controller";
import { getByIdOrder } from "../controller/foodOrder/getById-foodOrder.controller";
import { putOrder } from "../controller/foodOrder/put-foodOrder.controller";
import { authenticateToken } from "../middleware/jw-verify";

const foodOrderRouter = express.Router();
foodOrderRouter.post("/", createFoodOrder);

foodOrderRouter.get("/", authenticateToken, getOrder);

foodOrderRouter.get("/:orderId", getByIdOrder);

foodOrderRouter.put("/putOrder/:orderId", putOrder);

export default foodOrderRouter;
