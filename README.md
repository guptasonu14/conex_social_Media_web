# Social Media Website Conex

## Introduction
Welcome to  our social media website project! This project is built using a modern stack comprising React for the frontend, Node.js with Express for the backend, and MongoDB as the database. Additionally, we've integrated Continuous Integration and Continuous Deployment (CI/CD) practices, utilized Amazon Web Services (AWS) for hosting, and leveraged Amazon S3 for storing images.

## Overview
Our social media website provides a platform for users to share images and articles with their community. Whether it's capturing memorable moments through images or expressing thoughts and insights through articles, our platform offers a seamless experience for users to engage and connect.

## Key Features
- Image Sharing: Users can upload and share images with their followers or the wider community.
- Article Writing: The platform enables users to compose and publish articles on various topics.
- Community Interaction: Users can interact with each other through likes, comments, and shares, fostering community engagement.
- CI/CD Integration: We've implemented CI/CD pipelines to automate the build, test, and deployment processes, ensuring smooth and efficient development workflows.
- AWS Integration: Leveraging AWS services such as EC2 for hosting and S3 for storing images enhances scalability, reliability, and performance.

## Project Structure 
```plaintext
conex/
├── backend/
│   ├── node_modules/
│   │   ├── controllers/
│   │   │   ├── auth.js
│   │   │   └── blog.js
│   │   │   └── posts.js
│   │   │   └── user.js
│   │   ├── data/
│   │   │   ├── index.js
│   │   ├── db/
│   │   │   ├── index.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   ├── multer.middleware.js
│   │   ├── models/
│   │   │   ├── Blog.js
│   │   │   └── Post.js
│   │   │   ├── User.js
│   │   ├── public/
│   │   │   ├── assets
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   └── blogs.js
│   │   │   ├── posts.js
│   │   │   ├── users.js
│   │   ├── utils/
│   │   │   └── cloudinary.js
│   ├── .env
│   │   ├── constants.js
│   │   ├── index.js
│   ├── package.json
│   ├── package-lock.json
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── components/
│   |    │   ├── Blog/
│   │   |    │   ├── Blog.css
│   │   │   |    ├── Blog.jsx
│   │   │   ├── blogs
│   │   |    │   ├── blog.css
│   │   │   |    ├── blog.jsx
│   |    │   ├── sidebar/
│   │   │   |    ├── Sidebar.css
│   │   │   |    ├── SideBar.jsx
│   |    │   ├── singlePost/
│   │   │   |    ├── Singlepost.css
│   │   │   |    ├── SinglePost.jsx
│   │   │   ├── FlexBetween.jsx
│   │   │   ├── Friend.jsx
│   │   │   ├── UserImage.jsx
│   │   │   ├── WidgetWrapper.jsx
│   │   ├── features/
│   │   |   ├── user/
│   │   │   ├── userSlice.jsx
│   │   ├── scenes
│   │   │   ├── blog/
│   │   │   |    ├── Write.css
│   │   │   |    ├── Write.jsx
│   │   │   ├── homearticle/
│   │   │   |    ├── HomeArticle.css
│   │   │   |    ├── HomeArticle.jsx
│   │   │   ├── homepage/
│   │   │   |    ├── HomePage.jsx
│   │   │   ├── loginpage/
│   │   │   |    ├── Form.jsx
│   │   │   |    ├── Login.css
│   │   │   |    ├── LoginPage.jsx
│   │   │   ├── navbar/
│   │   │   |    ├── Navbar.jsx
│   │   │   ├── profilepage/
│   │   │   |    ├── ProfilePage.jsx
│   │   │   ├── single/
│   │   │   |    ├── Single.css
│   │   │   |    ├── Single.jsx
│   │   │   ├── widgets/
│   │   │   ├── AdvertWidgets.jsx
│   │   │   ├── FriendListWidget.jsx
│   │   │   ├── MyPostWidget.jsx
│   │   │   ├── PostsWidget.jsx
│   │   │   ├── PostWidget.jsx
│   │   │   ├── UserWidget.jsx
│   │   ├── state/
│   │   │   ├──index.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── index.jsx
│   │   ├── store.js
│   │   ├── theme.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
├── .gitignore
└── README.md


