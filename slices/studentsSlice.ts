import { RootState } from "./../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface StudentsState {
  loading: boolean;
  students: [];
  error: string;
}

const initialState: StudentsState = {
  loading: false,
  students: [],
  error: "",
};

const authorizationToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgxMjE2MTZiZWZjZDNmODQzOTcwODQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTI2Mjk4ODV9.RYwyhkF3_nJpFv7O2Wy9lT0TpKRxcC80TCy-M9rnlXA";

export const fetchStudents: any = createAsyncThunk(
  "student/fetchStudents",
  async () => {
    const res = await axios.get("http://localhost:5000/api/student/getall", {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": authorizationToken,
      },
    });
    return res.data.result;
  }
);

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.loading = false;
      state.students = action.payload;
      state.error = "";
    });
  },
});


export const studentValue = (state: RootState) => state.students;

export default studentsSlice.reducer;
