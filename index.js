import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser  from 'cookie-parser';
import { dbConn } from './utils/dbConn.js';
import userRoute from './routes/user.route.js'
import bookRoute from './routes/book.route.js'
import cors from 'cors'

const app = express();

dotenv.config({});
app.use(express.json());
app.use(cookieParser())
app.use(cors({}))
dbConn();

// Serve the frontend build
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../frontend', 'dist')));

// API routes
app.use("/api/user", userRoute);
app.use("/api/books", bookRoute);

// Fallback route to serve index.html for undefined routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running at port ' + PORT);
});
