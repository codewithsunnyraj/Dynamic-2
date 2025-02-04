import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  //Cookie se token retrive karo
  const token = req.cookies.authToken;
  console.log("Token cookie se nikl liye", token);
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: No Token Provided",
    });
  }

  try {
    //Token verify karo
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token ko verify kar rhe hai", decoded);
    req.user = decoded; //user data ko request object mein attach karo
    next(); // Next middleware ya route handler ko call karo
  } catch (error) {
    return res
      .status(403)
      .json({ success: false, message: "Forbidden: Invalid token" });
  }
};
