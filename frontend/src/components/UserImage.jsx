import { Box } from "@mui/material";


// eslint-disable-next-line react/prop-types
const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://conex-social-media-web.vercel.app/assets/${image}`}
      />
    </Box> 
  );
};

 export default UserImage;
 

