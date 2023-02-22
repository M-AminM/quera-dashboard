import { RootState } from "./../store";
import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  value: boolean;
}

const initialState: ThemeState = {
  value: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = themeSlice.actions;

export const themeValue = (state: RootState) => state.themeToggle;

export default themeSlice.reducer;
