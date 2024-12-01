import express from "express";
import {
    login,
    logout,
    register,
} from "../controllers/user.controller.js"; // Update this path as per your project structure

const router = express.Router();

// user routes
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);


export default router;
