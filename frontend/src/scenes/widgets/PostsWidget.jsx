/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/index";
import PostWidget from "../widgets/PostWidget";


// eslint-disable-next-line react/prop-types
const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    // try {
      const response = await fetch("http://localhost:8000/posts", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      // if (!response.ok) {
      //   throw new Error("Failed to fetch posts");
      // }
      const data = await response.json();
      dispatch(setPosts({data}));
    // } catch (error) {
    //   console.error("Error fetching posts:", error);
    // }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUserPosts = async () => {
    // try {
      const response = await fetch(
        `http://localhost:8000/posts/${userId}/posts`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        },
      
       );
      // if (!response.ok) {
      //   throw new Error("Failed to fetch user posts");
      
      const data = await response.json();
      dispatch(setPosts({posts:data}));
    // } catch (error) {
    //   console.error("Error fetching user posts:", error);
    // }
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, [isProfile, userId, dispatch, token, getUserPosts, getPosts]); // Removed functions from the dependency array

  return (
    <>
      {Array.isArray(posts) &&
        posts.map(
          ({
            _id,
            userId,
            firstName,
            lastName,
            description,
            picturePath,
            userPicturePath,
            likes,
            comments,
          }) => (
            <PostWidget
              key={_id}
              postId={_id}
              postUserId={userId}
              name={`${firstName} ${lastName}`}
              description={description}
              picturePath={picturePath}
              userPicturePath={userPicturePath}
              likes={likes}
              comments={comments}
            />
          )
        )}
    </>
  );
};

export default PostsWidget;
