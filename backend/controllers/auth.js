import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";


dotenv.config({
  path: './.env'
})

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password, 
      picturePath,
      friends,
      occupation,
    } = req.body;

    // Logging the incoming request for debugging
    console.log("Incoming registration request:", req.body);

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    // Logging the newly created user object before saving
    console.log("New user object before saving:", newUser);

    const savedUser = await newUser.save();

    // Logging the saved user object
    console.log("User saved successfully:", savedUser);

    res.status(201).json(savedUser);
  } catch (err) {
    // Logging any errors that occur during registration
    console.error("Error during registration:", err);
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {

  try {
    const { email, password } = req.body;

    // Logging the incoming login request for debugging
    console.log("Incoming login request:", req.body);

    const user = await User.findOne({ email: email });

    if (!user) {
      console.log("User does not exist.");
      return res.status(400).json({ msg: "User does not exist. " });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("Invalid credentials.");
      return res.status(400).json({ msg: "Invalid credentials. " });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // Logging the user object before deleting the password
    console.log("User object before deleting password:", user);

    // Deleting the user's password before sending the response
    delete user.password;

    console.log(token)

    res.status(200).json({ token, user });
  } catch (err) {
    // Logging any errors that occur during login
    console.error("Error during login:", err);
    res.status(500).json({ error: err.message });
  }
};
