import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetch",
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data;
    });

export const fetchCategories = createAsyncThunk("categories/fetch",
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        return response.data;
    });

const ProductsSlice = createSlice({
    name: "Products",
    initialState: { product: [], status: '', categories: [], bestSellers: [] },
    reducers: { },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.status = "Loading";
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.product = action.payload;
            state.status = "Succes";
        },
        [fetchProducts.rejected]: (state) => {
            state.status = "Failed";
        },
        [fetchCategories.pending]: (state) => {
            state.status = "Loading";
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.categories = action.payload;
            state.status = "Success";
        },
        [fetchCategories.rejected]: (state) => {
            state.status = "Failed";
        }
    }
})

export default ProductsSlice.reducer;