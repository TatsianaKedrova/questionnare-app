import { Box, Button, Typography } from "@mui/material";
import React, { ReactElement } from "react";

const MainPage = ({ children }: { children: JSX.Element }): ReactElement => {
  return (
    <Box sx={{ backgroundColor: "pink", height: "100vh" }}>
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "30%",
          width: "700px",
          height: "400px",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        {children}
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "inherit",
          }}
        >
          <Typography
            variant="h3"
            fontSize="30px"
            fontWeight="bold"
            color={"#2CBDED"}
          >
            Hello, let's start our questionnaire
          </Typography>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              width: "450px",
              borderRadius: "20px",
              mt: "40px",
            }}
            onClick={() => alert("We are here")}
          >
            Start
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

export default MainPage;
