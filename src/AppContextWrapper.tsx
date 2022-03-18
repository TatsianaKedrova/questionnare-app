import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import React from "react";
import App from "./App";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

enum ModeTypes {
  DARK = "dark",
  LIGHT = "light",
}

const AppContextWrapper = () => {
  const [mode, setMode] = React.useState<ModeTypes>(ModeTypes.LIGHT);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === ModeTypes.LIGHT ? ModeTypes.DARK : ModeTypes.LIGHT));
      },
    }),
    []
  );

  const getDesignTokens = (mode: PaletteMode | undefined) => ({
    palette: {
      mode,
      ...(mode === ModeTypes.LIGHT
        ? {
            primary: {
              main: "#2998E5",
              light: "#8FDDF7",
            },
            success: {
              main: "#BF8AED",
              light: "#F1F2F6",
            },
            info: {
              main: "#FBFCFC",
            },
            error: {
              main: "#CD1B3B",
            },
          }
        : {
            primary: {
              main: "#ebecf1",
              light: "#c0c7c9",
            },
            success: {
              main: "#ed8ab0",
              light: "#F1F2F6",
            },
            info: {
              main: "#021111",
            },
            error: {
              main: "#CD1B3B",
            },
          }),
    },
  });

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AppContextWrapper;
