import { RootState } from "./../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface CounterState {
  loading: boolean;
  students: {};
  error: string;
}

const initialState: CounterState = {
  loading: false,
  students: {},
  error: "",
};

const authorizationToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgxMjE2MTZiZWZjZDNmODQzOTcwODQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTI2Mjk4ODV9.RYwyhkF3_nJpFv7O2Wy9lT0TpKRxcC80TCy-M9rnlXA";

export const deactivateStudent: any = createAsyncThunk(
  "student/deactivateStudent",
  async (id) => {
    const res = await axios.put(
      `http://localhost:5000/api/student/deactive/${id}`,
      undefined,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": authorizationToken,
        },
      }
    );
    return res.data.result;
  }
);

export const deactivateStudentSlice = createSlice({
  name: "deactivateStudent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deactivateStudent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deactivateStudent.fulfilled, (state, action) => {
      state.loading = false;
      state.students = action.payload;
      state.error = "";
    });
  },
});

export const deactivateStudentValue = (state: RootState) =>
  state.deactivateStudent;

export default deactivateStudentSlice.reducer;
