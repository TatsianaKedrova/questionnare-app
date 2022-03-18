import React from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { mainComponentStyles } from "./mainComponent.styles";

type SwitchModePropsType = {
  toggleMode: () => void;
};

const label = { inputProps: { "aria-label": "Switch demo" } };

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": mainComponentStyles.switchMuiChecked,
    "& + .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    },
  },
  "& .MuiSwitch-thumb": [
    mainComponentStyles.switchMuiSwitchThumb,
    { backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#d9e715" },
  ],
  "& .MuiSwitch-track": {
    backgroundColor: theme.palette.mode === "dark" ? "#442577" : "#815b09",
    opacity: 0.5,
    borderRadius: 20 / 2,
  },
}));

const SwitchMode: React.FC<SwitchModePropsType> = ({ toggleMode }) => {
  return (
    <>
      <MaterialUISwitch
        {...label}
        sx={{ position: "absolute", right: "35px", top: "10px" }}
        onClick={toggleMode}
      />
    </>
  );
};

export default SwitchMode;
