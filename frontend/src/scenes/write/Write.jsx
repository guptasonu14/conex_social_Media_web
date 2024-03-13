import { useState } from "react";
import "./Write.css";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Description:", desc);


    const newPost = {
      title,
      desc,
    };

    console.log("New Post:", newPost);

    // The following code is commented out for debugging purposes
    /*
    try {
      const res = await axios.post("http://localhost:8000/blogs", newPost);
      console.log(res);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
    */
  };

  
    // Check if userData is defined and has the userId property
    if (userData && userData.userId) {
      const newPost = {
        userId: userData.userId,
        title,
        desc,
      };
  
      console.log("New Post:", newPost);
  
      try {
        const res = await axios.post("http://localhost:8000/blogs", newPost);
        console.log(res);
        window.location.replace("/post/" + res.data._id);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.error("userData or userData.userId is undefined");
    }
  };
  


  return (
    <div className="write">
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story"
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          publish
        </button>
      </form>
    </div>
  );
}
