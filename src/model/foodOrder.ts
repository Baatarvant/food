import { model, Schema } from "mongoose";
import { foodOrderItemSchema } from "./foodOrderItem";

enum FoodOrderStatusEnum {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = " DELIVERED",
}
const foodOrderSchema = new Schema(
  {
    totalPrice: {
      type: Number,
      required: true,
    },
    foodOrderItems: [{ type: foodOrderItemSchema, required: true }],
    status: {
      type: String,
      require: true,
      default: FoodOrderStatusEnum.PENDING,
      enum: Object.values(FoodOrderStatusEnum),
    },
  },
  { timestamps: true }
);

export const FoodOrder = model("FoodOrder", foodOrderSchema);
