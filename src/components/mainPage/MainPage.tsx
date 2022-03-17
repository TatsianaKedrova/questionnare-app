import { Box, Button, Typography } from "@mui/material";
import React, { ReactElement } from "react";

const MainPage = ({ children }: { children: JSX.Element }): ReactElement => {
  return (
    <Box sx={{ backgroundColor: "#8FDDF7", height: "100vh" }}>
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "33%",
          width: "700px",
          height: "600px",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainPage;
