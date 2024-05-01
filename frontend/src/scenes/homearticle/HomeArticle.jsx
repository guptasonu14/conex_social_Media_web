import React, { useState, useEffect } from 'react';
import "./HomeArticle.css";
import axios from "axios";
import { useLocation } from "react-router";
import Blogs from '../../components/blogs/Blogs';
import Navbar from '../navbar/Navbar';

const HomeArticle = () => {
    const [blogs, setBlogs] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get("https://conex-clone.onrender.com/blogs/" + search);
                setBlogs(res.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
                console.error("Error details:", error.response); // Log the error details
            }
        };
    
        fetchPosts();
    }, [search]);
    

    return (
        <div className="home-article-container">
            
            <Navbar /> {/* Include Navbar component */}
            <div className="chakra-container css-11yhdgt">
                <div className="css-1axeuad">
                    <div className="css-0 text-center" style={{ marginTop: "20px" }}>
                        <h1 className="chakra-text css-r2nvt0" style={{ fontSize: "24px", color: "teal" }}>Read Article Here!</h1>
                        <span style={{ position: "relative", display: "inline-block", maxWidth: "100%" }}>
                            <img 
                                style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }}
                                alt=""
                                aria-hidden="true"
                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27313%27%20height=%2730%27/%3e"
                            />
                            <img
                                alt="title-decor"
                                src="https://images.consciousplanet.org/save-soil/_next/static/media/title-decor.7784c819.svg?auto=format&fit=max&w=640"
                                decoding="async"
                                data-nimg="intrinsic"
                                style={{ 
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    boxSizing: "border-box",
                                    padding: 0,
                                    border: "none",
                                    margin: "auto",
                                    display: "block",
                                    width: 0,
                                    height: 0,
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%"
                                }}
                                srcSet="https://images.consciousplanet.org/save-soil/_next/static/media/title-decor.7784c819.svg?auto=format&fit=max&w=384 1x, https://images.consciousplanet.org/save-soil/_next/static/media/title-decor.7784c819.svg?auto=format&fit=max&w=640 2x"
                            />
                        </span>
                    </div>
                </div>
            </div>
            <div className="home-article-content">
                <Blogs blogs={blogs} />
            </div>
        </div>  
    );
};

export default HomeArticle;