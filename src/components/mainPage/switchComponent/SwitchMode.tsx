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
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
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
