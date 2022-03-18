import { Button, useTheme } from "@mui/material";
import React from "react";

type ButtonCommonType = {
  handleNext: () => void;
  name: string;
};

const ButtonCommon: React.FC<ButtonCommonType> = ({ handleNext, name }) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      onClick={handleNext}
      sx={{ color: theme.palette.info.main }}
    >
      {name}
    </Button>
  );
};

export default ButtonCommon;
