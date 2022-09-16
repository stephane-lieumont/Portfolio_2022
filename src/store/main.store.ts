import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import formContactSlice from "./formContact.store";
import layoutSlice from "./layout.store";

const store = configureStore({
  reducer: {
    formContactSlice: formContactSlice.reducer,
    layoutSlice: layoutSlice.reducer
  }
})

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type ReducerFormEmployee = typeof formContactSlice.reducer;
export type StateFormEmployee = ReturnType<ReducerFormEmployee>;

export default store;