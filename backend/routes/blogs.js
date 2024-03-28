import express from "express";
import {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
  getAllBlogs,
} from "../controllers/blog.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// router.use(verifyToken);

// CREATE BLOG
router.post("/", verifyToken,createBlog);

// UPDATE BLOG
router.put("/:id", updateBlog);

// DELETE BLOG
router.delete("/:id", deleteBlog);

// GET BLOG BY ID
router.get("/:id", getBlogById);

// GET ALL BLOGS
router.get("/", getAllBlogs);

export default router;