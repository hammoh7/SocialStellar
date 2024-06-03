import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Ads
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="../assets/advert.jpg"
        // src="http://localhost:3001/assets/advert.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Welcome you to our virtual library</Typography>
      </FlexBetween>
      <Typography color={medium}>
        The place where you can access books in e-format
      </Typography>
      <Typography color="#2563eb">www.dummy.com</Typography> 
    </WidgetWrapper>
  );
};

export default AdvertWidget;
