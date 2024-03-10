import { useState } from "react";
import "./Write.css";
import { useSelector } from "react-redux";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  

  const { userData } = useSelector((store) => store.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: userData.username,
      title,
      desc,
    };
   
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
