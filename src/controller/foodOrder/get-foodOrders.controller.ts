import { Request, Response } from "express";
import { FoodOrder } from "../../model/foodOrder";
import { GetUserAuthInfoRequest } from "../../middleware/jw-verify";

export const getOrder = async (req: GetUserAuthInfoRequest, res: Response) => {
  const userId = req.user?.userId;

  try {
    const foodCategory = await FoodOrder.find({
      userId,
    });
    res.status(200).send({ success: true, foodCategory });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
