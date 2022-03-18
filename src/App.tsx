import React from "react";
import MainPage from "./components/mainPage/MainPage";
import Questions from "./components/questions/Questions";
import SwitchMode from "./components/mainPage/switchComponent/SwitchMode";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "./bll/store";
import { toggleMode } from "./bll/questionsReducer";
import { createTheme, useTheme } from "@mui/material";

const App = () => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <MainPage>
      <>
        <SwitchMode mode={mode} toggleMode={toggleColorMode} />
        <Questions />
      </>
    </MainPage>
  );
};

export default App;

// const mode = useSelector<RootStateType, boolean>(
//   (state) => state.questReducer.mode
// );
// const dispatch = useDispatch();

// const handleModeChange = () => {
//   dispatch(toggleMode());
// };
