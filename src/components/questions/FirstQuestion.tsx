import { Box, Button, FormControlLabel, RadioGroup } from "@mui/material";
import React, { ChangeEvent } from "react";
import Radio from "@mui/material/Radio";
import ButtonCommon from "../../commonComponents/ButtonCommon";

type FirstQuestionType = {
  error: boolean;
  handleRadioChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleNext: () => void;
  radioValue: string;
};

const FirstQuestion: React.FC<FirstQuestionType> = ({
  error,
  handleRadioChange,
  handleNext,
  radioValue,
}) => {
  return (
    <>
      <RadioGroup
        sx={{ m: "20px 0" }}
        row
        aria-labelledby="demo-error-radios"
        name="horoscope"
        value={radioValue}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          value="yes"
          control={<Radio />}
          label="Yes"
          labelPlacement="bottom"
          sx={{ color: "#59CDF3" }}
        />
        <FormControlLabel
          value="no"
          control={<Radio color={"error"} />}
          label="No"
          labelPlacement="bottom"
          sx={{ color: "#C6250D" }}
        />
      </RadioGroup>
      {error && <Box sx={{ color: "#C6250D" }}>Please select an option!</Box>}
      <ButtonCommon handleNext={handleNext} name={"Next question"} />
    </>
  );
};

export default FirstQuestion;
