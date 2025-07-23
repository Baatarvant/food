import express, { Request, Response } from "express";
import cors from "cors";

import { connectDb } from "./database/database";
import foodCategoryRouter from "./router/foodCategory.router";
import foodRouter from "./router/food.router";
import foodOrderRouter from "./router/foodOrder.router";
import userRouter from "./router/user.router";

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.use("/", foodCategoryRouter);
app.use("/user", userRouter);
app.use("/food", foodRouter);
app.use("/order", foodOrderRouter);

app.listen(port, async () => {
  await connectDb();
  console.log(`Example app listening on port http://localhost:${port}`);
});
