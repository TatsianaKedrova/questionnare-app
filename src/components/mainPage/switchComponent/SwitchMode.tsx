import React from "react";
import Switch from "@mui/material/Switch";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";

type SwitchModePropsType = {
  toggleMode: () => void;
  mode: "light" | "dark";
};

const label = { inputProps: { "aria-label": "Switch demo" } };

const SwitchMode: React.FC<SwitchModePropsType> = ({ toggleMode, mode }) => {
  return (
    <>
      {mode === "light" && (
        <WbSunnyOutlinedIcon
          htmlColor="orange"
          sx={{ position: "absolute", right: "100px", top: "15px" }}
        />
      )}
      <Switch
        {...label}
        sx={{ position: "absolute", right: "35px", top: "10px" }}
        onClick={toggleMode}
      />
      {mode === "dark" && (
        <NightlightRoundOutlinedIcon
          sx={{ position: "absolute", right: "8px", top: "15px" }}
        />
      )}
    </>
  );
};

export default SwitchMode;
