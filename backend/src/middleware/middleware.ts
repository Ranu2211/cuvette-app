import { NextFunction, Response } from "express";
import { AuthRequest, UserPayload } from "../types/types";
import jwt from "jsonwebtoken";
import { config } from "../config";

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, config.jwtSecret, (err: any, decoded: any) => {
    if (err) return res.sendStatus(403);
    const user = decoded as UserPayload;
    if (req.user) {
      req.user.id = user.id as string;
    }
    next();
  });
};
