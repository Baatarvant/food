import { Schema } from "mongoose";
import { FoodSchemaType } from "./food";

export type FoodOrderItemType = {
  food: FoodSchemaType;
  quantity: number;
};

export const foodOrderItemSchema = new Schema<FoodOrderItemType>({
  food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
  quantity: { type: Number, required: true },
});
