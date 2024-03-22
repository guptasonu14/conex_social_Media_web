import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import blogRoutes from "./routes/blogs.js";
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { createBlog } from "./controllers/blog.js";
import { verifyToken } from "./middleware/auth.js";
import connectDB from "./db/index.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { upload } from "./middleware/multer.middleware.js"; 

dotenv.config({ path: './.env' });

const app = express();

// Middleware
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));

app.use(cors({
   origin: process.env.CORS_ORIGIN, 
   credentials: true 
}));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.static("public"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Routes
app.post("/auth/register", upload.single("picturePath"), register);

app.post("/posts", verifyToken, upload.single("picturePath"), createPost);
app.post("/blogs", verifyToken, createBlog);

// Additional routes...
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/blogs", blogRoutes);

// MongoDB setup
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err);
  });
