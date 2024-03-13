import { useLocation } from "react-router";
import "./Singlepost.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SinglePost() {
  const location = useLocation();
  const Id = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  const { userData } = useSelector((store) => store.user);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:8000/blogs/" + Id);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [Id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/blogs/${post._id}`, {

        data: { userId: userData.userId }, 

      });
      window.location.replace("/");
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8000/blogs/${post._id}`, {

        userId: userData.userId, 

        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {
      console.error("Error updating post:", err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">
          {title}

          {post.userId === userData?.userId && (

            <div className="singlePostEdit">
              <i
                className="singlePostIcon fa-regular fa-pen-to-square"
                onClick={() => setUpdateMode(true)}
              ></i>
              <i
                className="singlePostIcon fa-regular fa-trash-can"
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:


            <Link to={`/?user=${post.userId}`} className="link">
              <b>{post.userId}</b>

            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
