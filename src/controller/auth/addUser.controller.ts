import { Request, Response } from "express";
import { User } from "../../model/user";
import bcrypt from "bcrypt";

export const addUser = async (req: Request, res: Response) => {
  const { email, password, address, phoneNumber } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({
      email,
      password: hashedPassword,
      address,
      phoneNumber,
      isVerified: false,
    });

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ success: false, error });
  }
};
