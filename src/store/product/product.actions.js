import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductsApi from "../../services/products.api";

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id) => {
    const rest = await ProductsApi.get(id);
    return rest.data;
  }
);
