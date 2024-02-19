import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Totalesomme } from '../../Redux-ToolKit/Slices/CartSlice';
import './Cart.css';

function Checkout() {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.Cartelements);
  const cartTotal = useSelector(state => state.cart.CartTotal);

  useEffect(() => {
    dispatch(Totalesomme());
  }, [cartItems, dispatch]);

  return (
    <>
      <div className="container-fluid" style={{ padding: '50px 100px' }}>
        <div className="row">
          <div className="col-md-5">
            <table id="cart" className="table table-hover table-condensed out">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Product</th>
                  <th style={{ width: '10%' }}>Price</th>
                  <th style={{ width: '8%' }}>Quantity</th>
                  <th style={{ width: '22%' }} className="text-center">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td data-th="Product">
                      <div className="row">
                        <div className="col-sm-2 hidden-xs">
                          <img src={item.image} alt={item.title} className="img-responsive img-cart" style={{ width: '50px' }}/>
                        </div>
                      </div>
                    </td>
                    <td data-th="Price">${item.price ? item.price.toFixed(2) : 'N/A'}</td>
                    <td data-th="Quantity">
                      <input
                        style={{ width: '30px' }}
                        type="number"
                        className="text-center"
                        value={item.cartQuantity}
                        disabled
                      />
                    </td>
                    <td data-th="Subtotal" className="text-center">${(item.price && item.cartQuantity) ? (item.price * item.cartQuantity).toFixed(2) : 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3"></td>
                  <td className="hidden-xs text-center"><strong>Total ${cartTotal.toFixed(2)}</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className='col-md-1'></div>
          <div className="col-md-6">
            <form className="mx-3" action="">
              <div className="container " style={{padding: '0px 5px', borderBottom: '2px dashed rgb(222, 218, 218)' }}>
                <div className="container-fluid bg-light py-1">
                  <h4>Payment Method</h4>
                </div>
                <div className="text-secondary py-4">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="ch" id="ch" value="creditcard" />
                    <label className="form-check-label h5" htmlFor="ch">Credit Card</label>
                  </div>
                  <div className="form-row justify-content-around">
                    <div className="col-lg-7">
                      <div className="container-fluid">
                        <div className="form-row">
                          <div className="col-12 form-group">
                            <label htmlFor="numcard" className="col-auto col-form-label">Card Number</label>
                            <input type="text" name="numcard" id="numcard" className="form-control" placeholder="**** **** **** ****" />
                          </div>
                          <div className="col-8 form-group">
                            <label htmlFor="expd" className="col-auto col-form-label justify-content-start">EXP DATE</label>
                            <input type="text" name="expd" id="expd" className="form-control" placeholder="mm/yyyy" />
                          </div>
                          <div className="col-4 form-group">
                            <label htmlFor="nv" className="col-auto col-form-label justify-content-start">CVV</label>
                            <input type="text" name="nv" id="nv" className="form-control" placeholder="123" required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-light h-50 text-center"><img className="img-fluid" src="images/icon-payment-methods-grid.png" alt="" /></div>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="ch" id="ch-" value="paypal" />
                    <label className="form-check-label" htmlFor="ch-"><i><img className="img-fluid" style={{ height: '20px' }} src="images/icon-paypal-full.png" alt="" /></i></label>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="form-row text-secondary align-items-center justify-content-around">
                  <div className="col-lg-7">
                    <div className="container-fluid pl-0 pt-2">
                      <div><h5>Buyer Protection</h5></div>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" name="ch1" id="ch1" value="ch1" />
                      <label className="form-check-label" htmlFor="ch1"><b>Full Refund</b> If you don't receive your order</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" name="ch2" id="ch2" value="ch2" />
                      <label className="form-check-label" htmlFor="ch2"><b>Full or Partial Refund,</b> If the product is not as described in details</label>
                    </div>
                    <a className="pl-3" href="">Learn More</a>
                  </div>
                  <div className="ops bg-secondary" style={{ width: '2px', height: '150px' }}></div>
                  <div className="col-lg-4">
                    <input type="submit" className="btn btn-success btn-lg px-4 ml-1" value="Confirm & Pay" />
                    <div>By clicking <b>Confirm & Pay</b> button you agree to the <a href="">Terms & Condition</a></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;