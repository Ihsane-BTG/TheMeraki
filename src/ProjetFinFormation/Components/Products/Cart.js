import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Totalesomme, clearCart, removeFromCart } from "../../Redux-ToolKit/Slices/CartSlice";
import './Cart.css';
import { updateCartItemQuantity } from "../../Redux-ToolKit/Slices/CartSlice";

const Cart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.Cartelements);
    const cartTotal = useSelector(state => state.cart.CartTotal);

    useEffect(() => {
        dispatch(Totalesomme());
    }, [cartItems, dispatch]);

    return (
        <div className="container">
            <h2>Your Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <div className="cart-page">
                    <p><strong>Your cart is empty.</strong></p>
                    <a href="/products/AllProducts" className="btn">Start Shopping</a>
                </div>
            ) : (

                <table id="cart" className="table table-hover table-condensed">
                    <thead>
                        <tr>
                            <th style={{ width: '50%' }}>Product</th>
                            <th style={{ width: '10%' }}>Price</th>
                            <th style={{ width: '8%' }}>Quantity</th>
                            <th style={{ width: '22%' }} className="text-center">Subtotal</th>
                            <th style={{ width: '10%' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td data-th="Product">
                                    <div className="row">
                                        <div className="col-sm-2 hidden-xs">
                                            <img src={item.image} alt={item.title} className="img-responsive img-cart" />
                                        </div>
                                        <div className="col-sm-10">
                                            <p className="nomargin">{item.title}</p>
                                        </div>
                                    </div>
                                </td>
                                <td data-th="Price">${item.price ? item.price.toFixed(2) : 'N/A'}</td>
                                <td data-th="Quantity">
                                    <input
                                        type="number"
                                        className="form-control text-center"
                                        value={item.cartQuantity}
                                        onChange={(e) => {
                                            const newQuantity = parseInt(e.target.value, 10);
                                            dispatch(updateCartItemQuantity({ id: item.id, newQuantity }));
                                        }}
                                    />
                                </td>
                                <td data-th="Subtotal" className="text-center">${(item.price && item.cartQuantity) ? (item.price * item.cartQuantity).toFixed(2) : 'N/A'}</td>
                                <td className="actions" data-th="">
                                    <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeFromCart(item))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <a href="/products/AllProducts" className="ml-0 btn"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                </svg> Continue Shopping</a>
                            </td>
                            <td colSpan="2" className="hidden-xs"></td>
                            <td className="hidden-xs text-center"><strong>Total ${cartTotal.toFixed(2)}</strong></td>
                            <td>
                                <button className="btn btn-block" onClick={() => dispatch(clearCart())}>
                                    Clear Cart
                                </button>
                                <a href="/checkout" className="btn btn-block">Checkout <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                </svg></a>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            )}
        </div>
    );
}

export default Cart;