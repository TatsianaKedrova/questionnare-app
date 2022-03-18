import React from "react";
import MainPage from "./components/mainPage/MainPage";
import Questions from "./components/questions/Questions";
import SwitchMode from "./components/mainPage/switchComponent/SwitchMode";
import { ThemeProvider, useTheme } from "@mui/material";
import { ColorModeContext } from "./AppContextWrapper";

const App = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const handleToggleMode = () => {
    colorMode.toggleColorMode();
  };

  // const getDesignTokens = (mode: PaletteMode) => ({
  //   palette: {
  //     mode,
  //     ...(mode === "light"
  //       ? {
  //           // palette values for light mode
  //           primary: {
  //             main: "#2998E5",
  //             light: "#8FDDF7",
  //           },
  //           success: {
  //             main: "#BF8AED",
  //             light: "#F1F2F6",
  //           },
  //           info: {
  //             main: "#FBFCFC",
  //           },
  //           error: {
  //             main: "#CD1B3B",
  //           },
  //         }
  //       : {
  //           // palette values for dark mode
  //           primary: {
  //             main: "#ebecf1",
  //             light: "#c0c7c9",
  //           },
  //           success: {
  //             main: "#ed8ab0",
  //             light: "#F1F2F6",
  //           },
  //           info: {
  //             main: "#021111",
  //           },
  //           error: {
  //             main: "#CD1B3B",
  //           },
  //         }),
  //   },
  // });

  return (
    <MainPage>
      <>
        <SwitchMode mode={theme.palette.mode} toggleMode={handleToggleMode} />
        <Questions />
      </>
    </MainPage>
  );
};

export default App;
