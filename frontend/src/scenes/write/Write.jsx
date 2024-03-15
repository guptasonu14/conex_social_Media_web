import { useState } from "react";
import { useSelector } from "react-redux";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const token = useSelector((state) => state.token);
  const { userData } = useSelector((store) => store.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: userData.username,
      title,
      desc,
    };

    try {
      const response = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, // Added Content-Type header
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      console.log("Post created successfully!");
      // You can navigate to another page or update the UI as needed
    } catch (error) {
      console.error("Error creating post:", error.message);
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
            value={title} // Added value attribute
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story"
            type="text"
            className="writeInput writeText"
            value={desc} // Added value attribute
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
