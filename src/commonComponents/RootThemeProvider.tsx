import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

type RootThemeProps = {};

export const RootThemeProvider: React.FC<RootThemeProps> = (props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2998E5",
        light: "#8FDDF7",
        contrastText: "#5CB1EB",
      },
      secondary: {
        main: "#12222E",
        light: "#86898B",
        contrastText: "#DBDCE0",
      },
      success: {
        main: "#BF8AED",
        light: "#F1F2F6",
      },
      info: {
        main: "#3D539B",
      },
      warning: {
        main: "#FB6E0E",
        light: "#F9D000",
      },
      error: {
        main: "#CD1B3B",
      },
    },

    typography: {
      fontFamily: "Inter",
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
