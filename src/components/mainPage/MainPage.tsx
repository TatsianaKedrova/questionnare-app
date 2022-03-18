import { Box, useTheme } from "@mui/material";
import React from "react";

const MainPage = ({ children }: { children: JSX.Element }): React.ReactElement => {

  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.light, height: "100vh" }}>
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "33%",
          width: "700px",
          height: "600px",
          backgroundColor: theme.palette.info.main,
          borderRadius: "10px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainPage;
