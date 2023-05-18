import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductService } from "../slices/Products/ProducService";
interface inputData {
  title: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  sold: number;
  colors: string;
  image: HTMLImageElement;
}
const AddProductThnuk = createAsyncThunk(
  "addProduct/new",
  async (data: inputData, thunkAPI) => {
    try {
      return await ProductService.addnewProduct(data);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export { AddProductThnuk };
