import { Response } from "express";
import { AuthRequest } from "../types/types";
import { prisma } from "../lib/prisma";

export const getUsers = async (req: AuthRequest, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    return res.status(200).json({ users: users });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
