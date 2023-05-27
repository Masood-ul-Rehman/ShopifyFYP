import { createSlice } from "@reduxjs/toolkit";
import { createStoreThunk } from "../../thunks/createStore/createStoreThunk";
import { ChooseThemeThunk } from "../../thunks/createStore/chooseThemeThunk";

const createStoreSlice = createSlice({
    name: "create-store",
    initialState: {
        isLoading: false,
        isError: false,
        isSuccess: false,
        isMessage: "",
        data: null,
        theme: null,
    },
    reducers: {},
    extraReducers(builder){
        builder.addCase(createStoreThunk.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(createStoreThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data= action.payload;
        });
        builder.addCase(createStoreThunk.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.isMessage = action.payload;
        });

        builder.addCase(ChooseThemeThunk.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(ChooseThemeThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.theme= action.payload;
        });
        builder.addCase(ChooseThemeThunk.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.isMessage = action.payload;
        });
    }
})

export const createStoreReducer = createStoreSlice.reducer;
