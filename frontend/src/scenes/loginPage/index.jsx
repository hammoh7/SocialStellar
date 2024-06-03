import { Box, Typography, useTheme, useMediaQuery, IconButton } from "@mui/material";
import Form from "./Form";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode } from "state";

const LoginPage = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const dark = theme.palette.neutral.dark;
  const handleModeToggle = () => {
    // Use the dispatch function inside the event handler
    dispatch(setMode());
  };
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SocialStellar
        </Typography>

        <IconButton onClick={handleModeToggle}>
          {theme.palette.mode === "dark" ? (
            <LightMode sx={{ fontSize: "25px" }} />
          ) : (
            <DarkMode sx={{ color: dark, fontSize: "25px" }} />
          )}
        </IconButton>
      </Box>

      

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Inspire, Connect, Belong: Your Social home, your SocialStellar
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
