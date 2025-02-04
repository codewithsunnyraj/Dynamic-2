import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { DbConfig } from "./Config/DbConfig.js";
import router from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use("/api/user", router);
app.listen(PORT || 3000, () => {
  DbConfig();
  console.log(`Server is running at PORT ${PORT}`);
});
