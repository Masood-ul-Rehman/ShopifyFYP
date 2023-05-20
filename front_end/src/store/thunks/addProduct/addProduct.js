// this needs to be completed yet 
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addProduct = createAsyncThunk('product/add', async ({formData, image}) => {

    try{
        const apiUrl = "http://localhost:3000/api/product/addProduct";
        const response = await axios.post(apiUrl, {
            User: formData.User,
            title: formData.title,
            slug: formData.slug,
            description: formData.description,
            price: formData.price,
            category: formData.category,
            quantity: formData.quantity,
            sold: 0,
            color: formData.color,
            image: image,
        })  

        return response.data;
    }

    catch(error){
        console.error("An error occurred:", error);
    }
})

export {addProduct};