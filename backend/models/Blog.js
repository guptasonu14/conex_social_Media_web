import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    userId:{
     type:String,
     required:true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },

   
  },
  { timestamps: true }
);


const Blog =  mongoose.model("Blog", BlogSchema);

export default Blog;