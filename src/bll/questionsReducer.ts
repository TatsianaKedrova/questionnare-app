import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export type YesNo = "yes" | "no" | "";

export type InitialStateType = {
  isBelieveInHoroscope: string;
  birthDate: string | null;
  horoscopeSign: string;
};

const initialState: InitialStateType = {
  isBelieveInHoroscope: "",
  birthDate: null,
  horoscopeSign: "",
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
    setYourBirthDate(state, action: PayloadAction<{ birthDate: string | null }>) {
      state.birthDate = action.payload.birthDate;
    },
  },
});

export const { setDoesBelieveInHoroscope, setYourBirthDate } =
  questionnaireSlice.actions;

export const questionsReducer = questionnaireSlice.reducer;
