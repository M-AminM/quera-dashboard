import { RootState } from "./../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface EmployeesState {
  loading: boolean;
  employees: [];
  error: string;
}

const initialState: EmployeesState = {
  loading: false,
  employees: [],
  error: "",
};

const authorizationToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgxMjE2MTZiZWZjZDNmODQzOTcwODQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTI2Mjk4ODV9.RYwyhkF3_nJpFv7O2Wy9lT0TpKRxcC80TCy-M9rnlXA";

export const fetchEmployees: any = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    const res = await axios.get("http://localhost:5000/api/employee/getall", {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": authorizationToken,
      },
    });
    return res.data.result;
  }
);

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.loading = false;
      state.employees = action.payload;
      state.error = "";
    });
  },
});

export const employeesValue = (state: RootState) => state.employees;

export default employeesSlice.reducer;
