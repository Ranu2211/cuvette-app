import { Request, Response, NextFunction } from "express";
import { AuthRequest, RegisterData } from "../types/types";
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config";

const SALT_ROUNDS = 10;

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data: RegisterData = req.body;

  const hashed = await bcrypt.hash(data.password, SALT_ROUNDS);
  const updatedData = {
    ...data,
    password: hashed,
  };

  try {
    const user = await prisma.user.create({
      data: updatedData,
    });

    if (user) {
      return res
        .status(201)
        .json({ message: "User created successfully", userId: user.id });
    }

    return res.status(400).json({ message: "User not created" });
  } catch (error) {
    next(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error });
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(data.password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id }, config.jwtSecret!, {
      expiresIn: "1h",
    });

    return res.status(200).json({ message: "Login", token: token });
  } catch (error) {
    next(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error });
  }
};
