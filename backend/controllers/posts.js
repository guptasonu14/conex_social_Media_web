import Post from "../models/Post.js";
import User from "../models/User.js";


/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
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

    // Check if post exists
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if userId is provided
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Check if user has already liked the post
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    // Update the post with new likes
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    // Send the updated post as response
    res.status(200).json(updatedPost);
  } catch (err) {
    // Handle any errors
    console.error("Error liking post:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, comment } = req.body;

    // Validate userId and comment fields
    if (!userId || !comment) {
      return res.status(400).json({ message: "UserId and comment are required" });
    }

    // Find the user by ID to get the first name and last name
    const user = await User.findById(userId);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a comment object with the username and comment text
    const newComment = {
      userId,
      userName: `${user.firstName} ${user.lastName}`, // Include username
      comment
    };

    // Find the post by ID and update its comments array
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { $push: { comments: newComment } }, // Add the new comment to the comments array
      { new: true } // Return the updated post
    );

    res.status(200).json(updatedPost); // Respond with the updated post
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};



