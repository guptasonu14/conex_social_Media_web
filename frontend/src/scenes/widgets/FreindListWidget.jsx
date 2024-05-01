 

import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../../components/Friend";
import { styled } from "@mui/system"; 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../state/index";

 

 
const StyledWidgetWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  padding: "1.5rem",
  borderRadius: "1rem",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.palette.mode === "dark" ? "0 2px 4px rgba(255, 255, 255, 0.3)" : "0 2px 4px rgba(0, 0, 0, 0.3)",
  position: "sticky", 
  top: "calc(43.5vh - 200px)", 
  left:"71%",
  width:"350px",
  maxHeight: "calc(100vh - 280px)", 
  zIndex: 1000, 
  overflowY: "scroll", 
  "::-webkit-scrollbar": {
    display: "none",
  },// Add vertical scroll when content exceeds height
}));

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:8000/users/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); 

  return (
    <StyledWidgetWrapper> 
    
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
      {friends.map((friend) => (
  <Friend
    key={friend._id} // Unique key prop
    friendId={friend._id}
    name={`${friend.firstName} ${friend.lastName}`}
    subtitle={friend.occupation}
    userPicturePath={friend.picturePath}
  />
))}

      </Box>
      </StyledWidgetWrapper>
  );
};

export default FriendListWidget;
 
