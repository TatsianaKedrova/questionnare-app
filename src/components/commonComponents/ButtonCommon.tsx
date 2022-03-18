import { Button, useTheme, ButtonProps } from "@mui/material";
import React from "react";

type ButtonCommonType = {
  handleNext: () => void;
  name: string;
};

const ButtonCommon: React.FC<ButtonCommonType> = ({ handleNext, name }) => {
  const theme = useTheme();
  return (
    <Button
      disableFocusRipple
      variant="contained"
      onClick={handleNext}
      sx={{ color: theme.palette.info.main }}
    >
      {name}
    </Button>
  );
};

export default ButtonCommon;
