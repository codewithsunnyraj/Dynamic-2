import express from "express";
import {
  loginUser,
  registerUser,
  userLogout,
} from "../Controller/userController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", userLogout);

export default router;
