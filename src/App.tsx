import React from "react";
import MainPage from "./components/mainPage/MainPage";
import Questions from "./components/questions/Questions";
import SwitchMode from "./components/mainPage/switchComponent/SwitchMode";
import { useTheme } from "@mui/material";
import { ColorModeContext } from "./AppContextWrapper";

const App = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const handleToggleMode = () => {
    colorMode.toggleColorMode();
  };

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
