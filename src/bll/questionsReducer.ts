import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export type YesNo = "yes" | "no" | "";

type InitialStateType = {
  questionsCount: number;
  isBelieveInHoroscope: string;
  birthDate: string | null;
  horoscopeSign: string;
};

const initialState: InitialStateType = {
  questionsCount: 3,
  isBelieveInHoroscope: "",
  birthDate: "",
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
