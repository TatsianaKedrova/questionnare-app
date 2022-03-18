import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ButtonCommon from "../../commonComponents/ButtonCommon";

type ThirdQuestionPropsType = {
  horoscope: string;
  handleHoroscopeChange: () => void;
  handleNext: () => void;
};

const horoscopeOptions = [
  "Aquarius",
  "Aries",
  "Cancer",
  "Capricorn",
  "Gemini",
  "Leo",
  "Libra",
  "Pisces",
  "Sagittarius",
  "Scorpio",
  "Taurus",
  "Virgo",
];

const ThirdQuestion: React.FC<ThirdQuestionPropsType> = ({
  handleHoroscopeChange,
  handleNext,
  horoscope,
}) => {
  return (
    <>
      <Autocomplete
        value={horoscope}
        disablePortal
        id="combo-box-demo"
        options={horoscopeOptions}
        sx={{ width: 300, m: "20px 0" }}
        renderInput={(params) => <TextField {...params} label="Horoscope" />}
        onChange={handleHoroscopeChange}
        forcePopupIcon
        clearIcon={null}
      />
      <ButtonCommon name={"Get quesionnaire results"} handleNext={handleNext}/>
    </>
  );
};

export default ThirdQuestion;
