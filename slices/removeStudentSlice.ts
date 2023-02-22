import { RootState } from "./../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface RemoveStudentState {
  loading: boolean;
  students: {};
  error: string;
}

const initialState: RemoveStudentState = {
  loading: false,
  students: {},
  error: "",
};

const authorizationToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgxMjE2MTZiZWZjZDNmODQzOTcwODQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTI2Mjk4ODV9.RYwyhkF3_nJpFv7O2Wy9lT0TpKRxcC80TCy-M9rnlXA";

export const deleteStudent: any = createAsyncThunk(
  "student/deleteStudent",
  async (id) => {
    const res = await axios.delete(`http://localhost:5000/api/student/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": authorizationToken,
      },
      data: {
        id: id,
      },
    });
    return res.data.result;
  }
);

export const deleteStudentSlice = createSlice({
  name: "deleteStudent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteStudent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteStudent.fulfilled, (state, action) => {
      state.loading = false;
      state.students = action.payload;
      state.error = "";
    });
  },
});

export const deleteStudentValue = (state: RootState) => state.deleteStudent;

export default deleteStudentSlice.reducer;
