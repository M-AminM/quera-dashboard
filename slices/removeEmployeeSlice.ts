import { RootState } from "./../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface RemoveEmployeeState {
  loading: boolean;
  employee: {};
  error: string;
}

const initialState: RemoveEmployeeState = {
  loading: false,
  employee: {},
  error: "",
};

const authorizationToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgxMjE2MTZiZWZjZDNmODQzOTcwODQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTI2Mjk4ODV9.RYwyhkF3_nJpFv7O2Wy9lT0TpKRxcC80TCy-M9rnlXA";

export const deleteEmployee: any = createAsyncThunk(
  "employee/deleteEmployee",
  async (id) => {
    const res = await axios.delete(`http://localhost:5000/api/employee/${id}`, {
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

export const deleteEmployeeSlice = createSlice({
  name: "deleteEmployee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteEmployee.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.employee = action.payload;
      state.error = "";
    });
  },
});

export const deleteEmployeeValue = (state: RootState) => state.deleteEmployee;

export default deleteEmployeeSlice.reducer;
