import { Button } from "@mui/material";
import React from "react";

type ButtonCommonType = {
  handleNext: () => void;
};

const ButtonCommon: React.FC<ButtonCommonType> = ({ handleNext }) => {
  return (
    <Button variant="contained" onClick={handleNext}>
      Next Question
    </Button>
  );
};

export default ButtonCommon;
