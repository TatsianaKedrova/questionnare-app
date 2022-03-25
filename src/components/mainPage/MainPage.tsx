import Box from "@mui/material/Box";
import React from "react";
import { mainComponentStyles } from "./switchComponent/mainComponent.styles";

const MainPage = ({
  children,
}: {
  children: JSX.Element;
}): React.ReactElement => {
  return (
    <Box sx={mainComponentStyles.outerContainer}>
      <Box sx={mainComponentStyles.mainPageContainer}>{children}</Box>
    </Box>
  );
};

export default MainPage;
