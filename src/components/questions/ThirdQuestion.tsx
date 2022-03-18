import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ButtonCommon from "../../commonComponents/ButtonCommon";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";

type ThirdQuestionPropsType = {
  handleSetHoroscope: (
    event: React.SyntheticEvent<Element, Event>,
    newValue: HoroscopeOptionsType | null
  ) => void;
  horoscope: HoroscopeOptionsType | null;
  handleNext: () => void;
};

export type HoroscopeOptionsType =
  | "Aquarius"
  | "Aries"
  | "Cancer"
  | "Capricorn"
  | "Gemini"
  | "Leo"
  | "Libra"
  | "Pisces"
  | "Sagittarius"
  | "Scorpio"
  | "Taurus"
  | "Virgo";

const horoscopeOptions: HoroscopeOptionsType[] = [
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
  handleNext,
  horoscope,
  handleSetHoroscope,
}) => {
  const horoscopeValue = useSelector<
    RootStateType,
    HoroscopeOptionsType | null
  >((state) => state.questReducer.horoscopeSign);
  console.log("horoscopeValue: ", horoscopeValue);

  return (
    <>
      <Autocomplete
        disablePortal
        value={horoscope}
        id="combo-box-demo"
        options={horoscopeOptions}
        sx={{ width: 300, m: "20px 0" }}
        onChange={handleSetHoroscope}
        renderInput={(params) => (
          <TextField {...params} label="Zodiac" variant="standard" />
        )}
        clearIcon={null}
      />

      <ButtonCommon name={"Get another results"} handleNext={handleNext} />
    </>
  );
};

export default ThirdQuestion;
