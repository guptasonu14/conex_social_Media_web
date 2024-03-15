import Blog from "../models/Blog.js";
import User from "../models/User.js";

import express from "express";
 
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Your route handlers and other middleware...




export const createPost = async (req, res) => {

  try {
    const { title, desc, userId } = req.body;
    const user = await User.findById(userId);
    const newPost = new Blog({
        title,
        desc,
        userId,

        });
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    const userId = "user_id_placeholder"; // Change this to get the user ID from authentication
    if (post.userId === userId) {
      try {
        const updatedPost = await Blog.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    const userId = "user_id_placeholder"; // Change this to get the user ID from authentication
    if (post.userId === userId) {
      try {
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllPosts = async (req, res) => {
  const userId = req.query.user;
  try {
    let posts;
    if (userId) {
      posts = await Blog.find({ userId });
    } else {
      posts = await Blog.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};
