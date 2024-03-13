import React from 'react';
import "./Blogs.css";
import Blog from '../Blog/Blog';

const Blogs = ({ blogs }) => {
 
  if (!blogs || !Array.isArray(blogs)) {
    return null; 
  }

  return (
    <div className="posts">
      {blogs.map((p) => (
        <Blog key={p._id} post={p} />
      ))}
    </div>
  );
}

export default Blogs;
