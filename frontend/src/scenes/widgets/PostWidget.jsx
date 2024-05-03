import { useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../state/index";
import FlexBetween from "../../components/FlexBetween";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  picturePath,
  userPicturePath,
  likes,
  comments: initialComments, 
}) => {
  const [isComments, setIsComments] = useState(false);
  const [newComment, setNewComment] = useState(""); // State to manage new comment input
  const [comments, setComments] = useState(initialComments); // Manage comments
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const patchLike = async () => {
    try {
      const response = await fetch(`https://conex-clone.onrender.com/posts/${postId}/like`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      });
      const updatedPost = await response.json();
      dispatch(setPost({ post: updatedPost }));
    } catch (error) {
      console.error("Error patching like:", error);
    }
  };

  const handleCommentSubmit = async () => {
    try {
      const response = await fetch(`https://conex-clone.onrender.com/posts/${postId}/comment`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId, comment: newComment }),
      });
      const updatedPost = await response.json();
      // Update local state with the new comment
      setComments(updatedPost.comments);
      // Clear the new comment input field
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <WidgetWrapper m="2rem 0">
      {/* Existing Post Content */}
      <Friend
        friendId={postUserId}
        name={name}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`https://conex-clone.onrender.com/assets/${picturePath}`}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>

      {/* New Comment Section */}
      {isComments && (
        <Box mt="0.5rem">
          {/* Render existing comments */}
          {comments.map((comment, i) => (
            <Box key={`${name}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                {comment.username}: {comment.comment}
              </Typography>
            </Box>
          ))}
          <Divider />
          {/* Input field for new comment */}
          <Box display="flex" alignItems="center">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              style={{ resize: "none", width: "calc(100% - 60px)" }}
            />
            <IconButton onClick={handleCommentSubmit}>
              {/* Submit comment button */}
              <Typography variant="button">Submit</Typography>
            </IconButton>
          </Box>
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
