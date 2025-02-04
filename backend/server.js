import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { DbConfig } from "./Config/DbConfig.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
  DbConfig();
  console.log(`Server is running at PORT ${PORT}`);
});
