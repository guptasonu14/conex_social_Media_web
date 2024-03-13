import React, { useState, useEffect } from 'react';
import "./HomeArticle.css";
import Sidebar from '../../components/sidebar/SideBar';
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
                const res = await axios.get("http://localhost:8000/blogs/" + search);
                setBlogs(res.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
                console.error("Error details:", error.response); // Log the error details
            }
        };
    
        fetchPosts();
    }, [search]);
    

    return (
        <>
        <Navbar />
        <div className="home">
            
            <Blogs blogs={blogs} />
            <Sidebar />
        </div>
        </>
    );
};

export default HomeArticle;
