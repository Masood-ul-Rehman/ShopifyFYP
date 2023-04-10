import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "../thunks/authThunk";
const user = JSON.parse(localStorage.getItem("user"));

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isError: null,
    user: user ? user : null,
    isSuccess: false,
    isMessage: "",
  },
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isMessage = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isMessage = action.payload;
        state.user = null;
      });
  },
});
export * from "../thunks/authThunk";
export const { reset } = AuthSlice.actions;
export const authSlice = AuthSlice.reducer;
