import express from "express";
import {
  createBlog,
  getPostsByUserId,
  deletePost,
  getPostById,
  getAllPosts,
} from "../controllers/blog.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.use(verifyToken);

// CREATE POST
router.post("/", createBlog);

// GET POSTS BY USER ID
router.get("/user/:userId/posts", getPostsByUserId);

// DELETE POST
router.delete("/:id", deletePost);

// GET POST BY ID
router.get("/:id", getPostById);

// GET ALL POSTS
router.get("/", getAllPosts);

export default router;
