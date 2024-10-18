import express from "express";
import { config } from "./config";
import defaultRoutes from "./routes/defaultRoutes";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

const PORT = config.port;
const app = express();

app.use(express.json());
app.use("/", defaultRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server started >> http://localhost:${PORT}`);
});
