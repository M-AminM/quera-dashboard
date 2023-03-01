import { RootState } from "./../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { authorizationToken } from "@/data";

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
