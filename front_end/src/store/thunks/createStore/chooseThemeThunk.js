import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axioshelper";

const API_URL = "/api/complete/completeSetup";

const ChooseThemeThunk = createAsyncThunk("choose/theme", async (themeData) => {
    const response = await axiosInstance.post(API_URL, themeData);
    return response.data;
})

export {ChooseThemeThunk};