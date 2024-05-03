 
import React, { useState, useEffect } from "react";
import { Typography, useTheme, styled } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import LazyLoad from 'react-lazyload'; 

const StyledWidgetWrapper = styled(WidgetWrapper)(({ theme }) => ({
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 2px 4px rgba(255, 255, 255, 0.3)"
      : "0 2px 4px rgba(0, 0, 0, 0.3)",
  width: "350px",
  paddingBottom: "2rem",
}));

const ads = [
  {
    sponsor: "The Cookhouse",
    website: "cookhouse.com",
    description: "Fast and yummy.Good for your tummy",
    image: "https://conex-clone.onrender.com/assets/info2.png",
  },
  {
    sponsor: "Moire",
    website: "Moirefashion.com",
    description: "Unleash your inner fashionista",
    image: "https://conex-clone.onrender.com/assets/info3.png",
  },
  {
    sponsor: "Realgreatsite",
    website: "realgreatsite.com",
    description: "Wherever life plants you,bloom with decor!",
    image: "https://conex-clone.onrender.com/assets/info4.png",
  },
  {
    sponsor: "FitZone Fitness",
    website: "fitzone.com",
    description:
      "We belive that everyone deserves to be fit and healthy.Our gym offers a variety of classes and programs to fit all.",
    image: "https://conex-clone.onrender.com/assets/info5.png",
  },
];

 
const AdvertWidget = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const currentAd = ads[currentAdIndex];

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
      </FlexBetween>
      <LazyLoad height={200} offset={100}>
        <img
          width="100%"
          height="auto"
          alt="advert"
          src={currentAd.image}
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />
      </LazyLoad>
      <FlexBetween>
        <Typography color={main}>{currentAd.sponsor}</Typography>
        <Typography color={medium}>{currentAd.website}</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        {currentAd.description}
      </Typography>
    </WidgetWrapper>
  );
};

 

 

 
export default AdvertWidget;
