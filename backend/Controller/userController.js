import { userModel } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createToken } from "../utils/token.js";
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(404).json({ message: "All Fields Required", success: false });
  }
  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res
        .status(404)
        .json({ success: false, message: "User Already Exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({
      success: true,
      token,
      message: " User Register Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error While Registering",
      success: false,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(404)
        .json({ success: false, message: "All fields required" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    }
    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Credientials" });
    }
    const token = createToken(user._id);
    
     // Set the token as a cookie
     res.cookie('authToken', token, {
        httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
        secure: false, // Set to true if using HTTPS
        maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
      });

    res
      .status(200)
      .json({ success: true, message: "Login successfully", token: token });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error while login", success: false });
  }
};


export const userLogout = async(req,res)=>{
    
}