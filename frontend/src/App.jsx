import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { themeSettings } from "./theme"; 

//import LoginPage from "..src/scenes/loginpage/LoginPage"
//import LoginPage from "../src/scenes/loginPage/LoginPage";
 

 
import LoginPage from "./scenes/loginpage/LoginPage"
import SinglePost from "./components/singlePost/SinglePost";
 
import HomePage from "../src/scenes/homepage/HomePage";
import ProfilePage from "../src/scenes/profilepage/ProfilePage";
import HomeArticle from "../src/scenes/homearticle/HomeArticle";
import Write from "../src/scenes/blog/Write";

const App = () => {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
            <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />
            <Route path="/homearticle" element={<HomeArticle />} />
            <Route path="/write" element={isAuth ? <Write /> : <Navigate to="/" />} />
            <Route path="/blogs/:id" element={<SinglePost />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
