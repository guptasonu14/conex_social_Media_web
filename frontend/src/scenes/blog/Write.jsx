import React, { useState } from "react";
import "./Write.css";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/index";
import axios from 'axios';
import Navbar from "../navbar/Navbar";


export default function Write() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000'
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.post('/blogs', {
        title: title,
        desc: desc,
        userId: _id
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const newPost = response.data;
      dispatch(setPosts(newPost));
      setTitle("");
      setDesc("");
      
      
    } catch (error) {
      console.error("Error occurred while submitting:", error.response?.data ?? error.message);
    }
  };

  return (
    <div>
      <Navbar />
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
              className="writeInput writeText"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
