import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export const questionnaireSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
});

export const {} = questionnaireSlice.actions;

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