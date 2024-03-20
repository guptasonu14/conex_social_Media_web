import Post from "../models/Post.js";
import User from "../models/User.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/dataUri.js";


/* CREATE */
export const createPost = async (req, res) => {
  try {
    console.log("Inside createPost controller"); // Debug statement
    const { userId, description } = req.body;
    console.log("User ID:", userId); // Debug statement
    console.log("Description:", description); // Debug statement
    const user = await User.findById(userId);
    console.log("User:", user); // Debug statement
    const file = req.file; // Check if req.file is properly populated
    console.log("File:", file); // Debug statement

    if (!file) {
      throw new Error("No file uploaded");
    }

    const fileUri = getDataUri(file);
    console.log("File URI:", fileUri); // Debug statement

    if (!fileUri) {
      throw new Error("Failed to convert file to Data URI");
    }

    const mycloud = await uploadOnCloudinary.v2.uploader.upload(fileUri.content);
    console.log("Uploaded to Cloudinary:", mycloud); // Debug statement

    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      description,
      picturePath: {
        public_id: mycloud.public_id, 
        url: mycloud.secure_url,
      },
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
