import { Router } from "express";
import { getUsers } from "../controllers/userController";
import { authMiddleware } from "../middleware/middleware";

const router = Router();

router.get("/users", authMiddleware, getUsers);

export default router;
