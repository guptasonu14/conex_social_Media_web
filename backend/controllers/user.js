import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    user.password = undefined;
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* SEARCH */
export const searchUsersByUsername = async (req, res) => {
  try {
    const { username } = req.query;
    const users = await User.find({
      $or: [
        { firstName: { $regex: username, $options: "i" } },
        { lastName: { $regex: username, $options: "i" } },
      ],
    });

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* UPDATE */
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE - Upload Picture to Cloudinary */
export const uploadPicture = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const uploadedImage = await uploadOnCloudinary(req.file);

    user.picturePath = uploadedImage.url;
    await user.save();

    res.status(200).json({ imageUrl: uploadedImage.url });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
