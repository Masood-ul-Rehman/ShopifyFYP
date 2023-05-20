import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "../../thunks/addProduct/addProduct";

const addProductSlice = createSlice({
    name: "add-product",
    initialState: {
        isLoading: false,
        data: [],
        error: null,
    },
    reducers: {},
    extraReducers(builder){
        builder.addCase(addProduct.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            console.log(action.payload);
        });
        builder.addCase(addProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
})


export const addProductReducer = addProductSlice.reducer;