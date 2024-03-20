import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // If upload is successful, log the URL and remove the temporary file
    console.log("File is uploaded on Cloudinary: ", response.url);
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // If upload fails, remove the temporary file and return null
    fs.unlinkSync(localFilePath);
    console.error("Failed to upload file to Cloudinary:", error.message);
    return null;
  }
};

export default uploadOnCloudinary;
