import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Greeting = () => {
  return (
    <Box
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
    </Box>
  );
};

export default Greeting;
