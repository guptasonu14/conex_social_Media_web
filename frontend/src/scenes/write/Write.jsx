import { useState } from "react";
import { useSelector } from "react-redux";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("title", title);
    formData.append("desc", desc);

    try {
      const response = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      console.log("Post created successfully!");
      
    } catch (error) {
      console.error("Error creating post:", error.message);
      setError("Failed to create post. Please try again later.");
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story"
            type="text"
            className="writeInput writeText"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        {error && <p className="error">{error}</p>}
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
