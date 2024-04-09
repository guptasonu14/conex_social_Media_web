import React from 'react';
import "./Blog.css"
import { Link } from 'react-router-dom'

const Blog = ({post}) => {
  return (
    <div className="post-container"> 
      <div className="post">
        <div className="postInfo">
          <Link to={`/blogs/${post._id}`} className="link">
            <span className="postTitle">{post.title}</span>
          </Link>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </div>
    </div>
  );
}

export default Blog;
