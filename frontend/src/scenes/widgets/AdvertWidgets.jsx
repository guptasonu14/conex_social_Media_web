// import { Typography, useTheme, styled } from "@mui/material";
// import FlexBetween from "../../components/FlexBetween";
// import WidgetWrapper from "../../components/WidgetWrapper";

// const StyledWidgetWrapper = styled(WidgetWrapper)(({ theme }) => ({
//   boxShadow: theme.palette.mode === "dark" ? "0 2px 4px rgba(255, 255, 255, 0.3)" : "0 2px 4px rgba(0, 0, 0, 0.3)",
//  // position: "fixed",
//  // top: "calc(43.5vh - 200px)", // Adjust as needed
//   width:"350px",
//   paddingBottom: "2rem", // Add some padding to the bottom
// }));

// const AdvertWidget = () => {
//   const { palette } = useTheme();
//   const dark = palette.neutral.dark;
//   const main = palette.neutral.main;
//   const medium = palette.neutral.medium;

//   return (
//     <StyledWidgetWrapper>
//       <FlexBetween>
//         <Typography color={dark} variant="h5" fontWeight="500">
//           Sponsored
//         </Typography>
//         <Typography color={medium}>Create Ad</Typography>
//       </FlexBetween>
//       <img
//         width="100%"
//         height="auto"
//         alt="advert"
//         src="http://localhost:8000/assets/info4.jpeg"
//         style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
//       />
//       <FlexBetween>
//         <Typography color={main}>MikaCosmetics</Typography>
//         <Typography color={medium}>mikacosmetics.com</Typography>
//       </FlexBetween>
//       <Typography color={medium} m="0.5rem 0">
//         Your pathway to stunning and immaculate beauty and made sure your skin
//         is exfoliating skin and shining like light.
//       </Typography>
//     </StyledWidgetWrapper>
//   );
// };

// export default AdvertWidget;

import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>MikaCosmetics</Typography>
        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty and made sure your skin
        is exfoliating skin and shining like light.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;


 

