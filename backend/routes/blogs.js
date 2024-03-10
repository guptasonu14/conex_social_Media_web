import express from "express";
import {
  createPost,
  updatePost,
  deletePost,
  getPostById,
  getAllPosts,
} from "../controllers/blog.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
router.use(verifyToken);

// CREATE POST
router.post("/", createPost);

// UPDATE POST
router.put("/:id", updatePost);

// DELETE POST
router.delete("/:id", deletePost);

// GET POST
router.get("/:id", getPostById);

// GET ALL POSTS
router.get("/", getAllPosts);

export default router;
