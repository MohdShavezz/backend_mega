import express from "express";
import {
    getBooks,createBook
} from "../controllers/book.controller.js"; // Update this path as per your project structure
import isAuthenticated from '../middlewares/isAuthenticated.js'

const router = express.Router();

// book routes
router.route("/").get(getBooks).post(isAuthenticated, createBook);


export default router;
