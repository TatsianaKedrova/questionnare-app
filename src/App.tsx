import React from "react";
import MainPage from "./components/mainPage/MainPage";
import Questions from "./components/questions/Questions";
import SwitchMode from "./components/mainPage/switchComponent/SwitchMode";
import { ColorModeContext } from "./AppContextWrapper";

const App = () => {
  const colorMode = React.useContext(ColorModeContext);

  const handleToggleMode = () => {
    colorMode.toggleColorMode();
  };

  return (
    <MainPage>
      <>
        <SwitchMode toggleMode={handleToggleMode} />
        <Questions />
      </>
    </MainPage>
  );
};

export default App;
