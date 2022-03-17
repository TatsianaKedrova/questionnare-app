import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export type YesNo = "yes" | "no" | "";

type InitialStateType = {
  questionsCount: number;
  isBelieveInHoroscope: string;
  birthDate: string;
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
  },
});

export const { setDoesBelieveInHoroscope } = questionnaireSlice.actions;

export const questionsReducer = questionnaireSlice.reducer;

// reducers: {
//     incrementItem(state, action: PayloadAction<{ id: string }>) {
//       const incrementedItem = state.find(
//         (element) => element.id === action.payload.id
//       );
//       if (incrementedItem) {
//         incrementedItem.itemsCount++;
//       }
//     },
//     decrementItem(state, action: PayloadAction<{ id: string }>) {
//       const decrementedItem = state.find(
//         (element) => element.id === action.payload.id
//       );
//       if (decrementedItem) {
//         decrementedItem.itemsCount--;
//       }
//     },
