import React from "react";
import DateAdapter from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import ButtonCommon from "../../commonComponents/ButtonCommon";
import { Box } from "@mui/material";

type SecondQuestionPropsType = {
  handleBirthDateChange: (newValue: string | null) => void;
  handleNext: () => void;
  birthDate: string | null;
};

const SecondQuestion: React.FC<SecondQuestionPropsType> = ({
  birthDate,
  handleNext,
  handleBirthDateChange,
}) => {
  return (
    <>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Box sx={{m: "20px 0"}}>
          <DatePicker
            label="Choose your birthdate"
            value={birthDate}
            onChange={(newValue) => handleBirthDateChange(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
      </LocalizationProvider>
      <ButtonCommon handleNext={handleNext} />
    </>
  );
};

export default SecondQuestion;
