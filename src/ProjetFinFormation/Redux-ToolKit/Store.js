import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/ProductsSlice";
import UsersSlice from "./Slices/UsersSlice";
import CartSlice from "./Slices/CartSlice";


const Store = configureStore({
    reducer : {
        product: productSlice,
        user: UsersSlice,
        cart: CartSlice,
    }
});

export default Store;