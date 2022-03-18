import { Box, useTheme } from "@mui/material";
import React from "react";
import { mainComponentStyles } from "./switchComponent/mainComponent.styles";

const MainPage = ({
  children,
}: {
  children: JSX.Element;
}): React.ReactElement => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.light, height: "100vh" }}>
      <Box
        sx={[
          mainComponentStyles.mainPageContainer,
          { backgroundColor: theme.palette.info.main },
        ]}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainPage;
