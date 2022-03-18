import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HoroscopeOptionsType } from "../components/questions/ThirdQuestion";

export type InitialStateType = {
  isBelieveInHoroscope: string;
  birthDate: string | null;
  horoscopeSign: HoroscopeOptionsType | null;
  mode: boolean;
};

const initialState: InitialStateType = {
  isBelieveInHoroscope: "",
  birthDate: null,
  horoscopeSign: null,
  mode: false,
};

export const questionnaireSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setDoesBelieveInHoroscope(
      state,
      action: PayloadAction<{ isBelieveInHoroscope: string }>
    ) {
      console.log("inside dispatch method");

      state.isBelieveInHoroscope = action.payload.isBelieveInHoroscope;
    },
    setYourBirthDate(
      state,
      action: PayloadAction<{ birthDate: string | null }>
    ) {
      state.birthDate = action.payload.birthDate;
    },
    setYourHoroscope(state, action: PayloadAction<{ horoscopeSign: HoroscopeOptionsType | null }>) {
      state.horoscopeSign = action.payload.horoscopeSign;
    },
    toggleMode(state, action: PayloadAction) {
      state.mode = !state.mode;
    },
  },
});

export const { setDoesBelieveInHoroscope, setYourBirthDate, setYourHoroscope, toggleMode } =
  questionnaireSlice.actions;

export const questionsReducer = questionnaireSlice.reducer;
