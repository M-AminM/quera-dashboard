import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./slices/studentsSlice";
import deleteStudentSlice from "./slices/removeStudentSlice";
import themeSlice from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    students: studentsSlice,
    deleteStudent: deleteStudentSlice,
    themeToggle: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
