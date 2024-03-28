import Blog from "../models/Blog.js";
import User from "../models/User.js";

// CREATE BLOG
export const createBlog = async (req, res) => {
 
  try {
    const { title, desc, userId } = req.body;
    const newBlog = new Blog({ userId, title, desc });
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE BLOG
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(id, { title, desc }, { new: true });
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE BLOG
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET BLOG BY ID
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// GET ALL BLOGS
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }); 
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};