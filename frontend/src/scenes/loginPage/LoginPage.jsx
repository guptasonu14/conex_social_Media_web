/* eslint-disable react/no-unescaped-entities */
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import './Login.css'

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
    style={{
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
    }}
  >
    <video
      autoPlay
      loop
      muted
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}
    >
      <source src=".\src\assets\back.mp4" type="video/mp4" />
      
    </video>
  
    <div className="logo" style={{ zIndex: 1 }}>
      <img src=".\src\assets\logo.png" className="img-fluid" style={{ width: '180px' }} alt="Logo" />
    </div>
  
    <Box
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isNonMobileScreens ? "50%" : "93%",
        padding: '2rem',
        borderRadius: '1.5rem',
        backgroundColor: theme.palette.background.alt,
      }}
    >
      <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
        Welcome to Conex, the Social Media for Verto's!
      </Typography>
      <Form />
    </Box>
  </Box>
  
  
  
  );
};

export default LoginPage;
