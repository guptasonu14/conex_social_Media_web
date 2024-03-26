import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      public_id: `${Date.now()}`,
    });

    // Delete the locally saved temporary file
    fs.unlinkSync(localFilePath);

    // Return the URL of the uploaded file
    return response.secure_url; // Use response.secure_url to get the HTTPS URL
  } catch (error) {
    // If upload fails, delete the locally saved temporary file
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export default uploadOnCloudinary;
