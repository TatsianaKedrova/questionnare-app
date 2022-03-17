import React from "react";
import MainPage from "./components/mainPage/MainPage";
import Greeting from "./components/mainPage/Greeting";
import FirstQuestion from "./components/questions/FirstQuestion";
import Questions from "./components/questions/Questions";

const App = () => {
  return (
    <MainPage>
      <Questions />
    </MainPage>
  );
};

export default App;
