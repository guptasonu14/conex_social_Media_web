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

## Project Screenshot
## Screenshots
1. LoginPage
 ![loginpage](https://github.com/guptasonu14/conex_social_Media_web/assets/74126459/823d9145-5289-42e1-b2d3-57d4ad4e7376)


2.SignUp Page
 ![signup Page](https://github.com/guptasonu14/conex_social_Media_web/assets/74126459/28f87675-cf6c-4af6-86a6-af8a4d43a198)



3. HomePage of Post
  ![Home](https://github.com/guptasonu14/conex_social_Media_web/assets/74126459/c7a215a4-00e4-49ed-bea9-c5a180b0a87e)



4. Article
  ![article](https://github.com/guptasonu14/conex_social_Media_web/assets/74126459/2b517147-6f1a-40cc-ab7e-c854a5ac7ef5)




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



