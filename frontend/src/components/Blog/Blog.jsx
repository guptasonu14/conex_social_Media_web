import React from 'react'
import "./Blog.css"
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className="post">
     <div className="postInfo">
      <Link to={`/post/${post._id}`} className="link">
        <span className="postTitle">{post.title}</span>
      </Link>
      <hr />
      <span className="postDate">
        {new Date(post.createdAt).toDateString()}
      </span>
    </div>
    <p className="postDesc">{post.desc}</p>
  </div>
);
}

export default Blog