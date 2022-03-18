import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { questionsReducer } from "./questionsReducer";

export const rootReducer = combineReducers({
  questReducer: questionsReducer,
});

export type RootReducerType = typeof rootReducer;

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStateType = ReturnType<RootReducerType>;

export type AppDispatch = typeof store.dispatch;

//@ts-ignore
window.store = store;
