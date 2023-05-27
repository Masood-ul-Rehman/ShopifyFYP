import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axioshelper";
import axios from "axios";

const API_URL = "/api/create/newWebsite";

const createStoreThunk = createAsyncThunk("create/store", async (storeData) => {
    const response = await axiosInstance.post(API_URL, storeData);
    return response.data;
})

export {createStoreThunk};