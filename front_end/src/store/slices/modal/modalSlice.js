import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: false,
    reducers: {
        openModal(state, action){
            return true
        },
        closeModal(state, action){
            return false
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;