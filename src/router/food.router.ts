import express from "express";
import { createFood } from "../controller/food/create-food.controller";
import { getFoodsWithCategories } from "../controller/food/get-food-with-categories";
import { authenticateToken } from "../middleware/jw-verify";
const foodRouter = express.Router();

foodRouter.post("/", createFood);

// foodRouter.get("/getFood/:foodId", getFood);

foodRouter.get(
  "/getFoodsWithCategories",
  authenticateToken,
  getFoodsWithCategories
);

// foodRouter.delete("/deleteFood/:foodId", deleteFood);

// foodRouter.put("/putFood/:foodId", putFood);

export default foodRouter;
