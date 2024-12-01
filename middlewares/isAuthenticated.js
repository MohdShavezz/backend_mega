import jwt from "jsonwebtoken";
import { BlacklistedToken } from "../models/blacklistedToken.model.js";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req?.cookies?.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const blacklisted = await BlacklistedToken.findOne({ token: token.trim() });
    // console.log("Blacklisted Token:", blacklisted);
    if (blacklisted) {
      return res.status(403).json({
        message: "Token has been blacklisted. Please log in again.",
        success: false,
      });
    }

    // Verify token
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    req.id = decode.userId;
    next();
  } catch (error) {
    console.error("Authentication Error:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export default isAuthenticated;
