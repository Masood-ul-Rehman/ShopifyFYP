import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddProductThnuk } from "../../thunks/ProductsThunk";
interface MySliceState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;

  isMessage: any;
}
const initialState: MySliceState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  isMessage: "",
};
const AddProduct = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddProductThnuk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddProductThnuk.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(AddProductThnuk.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isMessage = action.payload;
      });
  },
});
export const addProduct = AddProduct.reducer;
export * from "../../thunks/ProductsThunk";
