import Blog from "../models/Blog.js";
import User from "../models/User.js";

export const createBlog = async (req, res) => {
  try {
    const { title, desc, userId } = req.body;
    const newPost = new Blog({
      userId,
      title,
      desc,
    });
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPostsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Blog.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Blog.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.userId !== req.userId) {
      return res.status(401).json({ message: "You can delete only your post!" });
    }
    await Blog.findByIdAndDelete(id);
    res.status(200).json({ message: "Post has been deleted" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Blog.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const userId = req.query.user;
    let posts;
    if (userId) {
      posts = await Blog.find({ userId });
    } else {
      posts = await Blog.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
