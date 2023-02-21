import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./slices/studentsSlice";
import deleteStudentSlice from "./slices/removeStudentSlice";
import deactivateStudentSlice from "./slices/deactivateStudentSlice";

export const store = configureStore({
  reducer: {
    students: studentsSlice,
    deleteStudent: deleteStudentSlice,
    deactivateStudent: deactivateStudentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
