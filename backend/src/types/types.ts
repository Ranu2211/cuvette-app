import { Request } from "express";

export interface UserPayload {
  id: string;
}

export interface AuthRequest extends Request {
  user?: UserPayload;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}
