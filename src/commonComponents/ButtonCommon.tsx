import { Button } from "@mui/material";
import React from "react";

type ButtonCommonType = {
  handleNext: () => void;
  name: string;
};

const ButtonCommon: React.FC<ButtonCommonType> = ({ handleNext, name }) => {
  return (
    <Button variant="contained" onClick={handleNext}>
      {name}
    </Button>
  );
};

export default ButtonCommon;
