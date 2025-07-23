import { Request, Response } from "express";
import { Food } from "../../model/food";
import { FoodOrder } from "../../model/foodOrder";

export const createFood = async (req: Request, res: Response) => {
  console.log("hi");

  const { foodName, price, image, ingredients, category } = req.body;
  try {
    const food = await new Food({
      foodName,
      price,
      image,
      ingredients,
      category,
    }).save();
    res.status(200).send({ success: true, food });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
