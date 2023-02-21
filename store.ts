import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./slices/studentsSlice";
import deleteStudentSlice from './slices/removeStudentSlice'

export const store = configureStore({
  reducer: {
    students: studentsSlice,
    deleteStudent: deleteStudentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
