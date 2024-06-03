import express from "express";          // backend framework 
import bodyParser from "body-parser";   // npm module used to process sent data in HTTP request body
import mongoose from "mongoose";        // JSON library for connection between MongoDB and Node.js
import cors from "cors";                // Cross-Origin Resource Policy - Mechanism for integrating app
import dotenv from "dotenv";            // environment variables
import multer from "multer";            // multer is used for uploading files
import helmet from "helmet";            // protection of node js app
import morgan from "morgan";            // middleware for Nodejs and Express to log HTTP requests 
import path from "path";                // 
import { fileURLToPath } from "url";    // decodes file urlto path string
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
// import { users,posts } from "./data/index.js";

/* Configurations */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

/* File Storage */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

/* Routes with files */
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);

/* Routes */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* Mongoose Connect */
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

    /* Addition of mock data */
    // User.insertMany(users);
    // Post.insertMany(posts);
})
.catch((error) => console.log(`${error}`));