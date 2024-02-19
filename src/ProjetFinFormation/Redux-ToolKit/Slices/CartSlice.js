import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    Cartelements: localStorage.getItem("Cartelements") ? JSON.parse(localStorage.getItem("Cartelements")) : [],
    CartTotaleQuantity: 0,
    CartTotal: 0,
};

export const updateCartItemQuantity = (payload) => (dispatch, getState) => {
    dispatch(updateQuantity(payload));
    dispatch(Totalesomme());
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id, quantity } = action.payload;
            const itemIndex = state.Cartelements.findIndex(
                (item) => item.id === id
            );
            if (itemIndex >= 0) {
                state.Cartelements[itemIndex].cartQuantity += quantity;
                toast.info("Added to Quantity In Your Cart!", { position: "bottom-right" });
            } else {
                const selectedProduct = { ...action.payload, cartQuantity: quantity };
                state.Cartelements.push(selectedProduct);
                toast.success(`${action.payload.title} To Cart`, { position: "bottom-right" });
            }
            localStorage.setItem("Cartelements", JSON.stringify(state.Cartelements));
        },
        removeFromCart(state, action) {
            const nextCartitem = state.Cartelements.filter(
                e => e.id !== action.payload.id)
            state.Cartelements = nextCartitem;
            localStorage.setItem("Cartelements", JSON.stringify(state.Cartelements));

            toast.error(`${action.payload.title} Removed From Cart`, { position: "bottom-right" });
        },
        clearCart(state) {
            state.Cartelements = [];
            toast.error(`cart Cleared`, { position: "bottom-right" });
            localStorage.setItem("Cartelements", JSON.stringify(state.Cartelements));
        },
        Totalesomme(state) {
            let { total, Quantity } = state.Cartelements.reduce((cartTotal, Cartelement) => {
                const { price, cartQuantity } = Cartelement;
                const ctotal = price * cartQuantity;
                cartTotal.total += ctotal;
                cartTotal.Quantity += 1;
                return cartTotal;
            }, {
                total: 0,
                Quantity: 0
            });

            state.CartTotaleQuantity = Quantity;
            state.CartTotal = total;
        },
        updateQuantity(state, action) {
            const { id, newQuantity } = action.payload;
            const itemIndex = state.Cartelements.findIndex((item) => item.id === id);

            if (itemIndex >= 0) {
                state.Cartelements[itemIndex].cartQuantity = newQuantity;
            }

            localStorage.setItem("Cartelements", JSON.stringify(state.Cartelements));
        },
    },
});

export const { addToCart, removeFromCart, decrementerCart, clearCart, Totalesomme, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;