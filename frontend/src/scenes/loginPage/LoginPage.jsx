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
        textAlign: 'center',  // Center the content horizontally
      }}
    >
      <div className="logo" style={{ zIndex: 1 }}>
        <img src=".\src\assets\logo.png" className="img-fluid" style={{ width: '180px', marginTop: '3rem' }} alt="Logo" />
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
