import Post from "../models/Post.js";
import User from "../models/User.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    
    const { userId, description } = req.body;
    console.log("User ID:", userId);
    console.log("Description:", description);
    const user = await User.findById(userId);
    console.log("User:", user);
    const file = req.file;
    console.log("File:", file); 

    const picturePath = req.file ? await uploadOnCloudinary(req.file.path) : null;

    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      description,
      picturePath: picturePath ? picturePath.url : null,
      likes: {},
      comments: [],
    });

    await newPost.save();
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(201).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || "Internal server error" });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addComment = async (req, res) => {
  try {
    const { id } = req.params; 
    const { comment } = req.body; 
    

    // Find the post by ID and update its comments array
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { $push: { comments: comment } }, // Add the new comment to the comments array
      { new: true } // Return the updated post
    );

    res.status(200).json(updatedPost); // Respond with the updated post
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};