import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Cart.css'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart }) => {
  console.log(cart);
  const Total = cart.reduce((sum, i) => {
    return (sum += i.price);
  }, 0);
  const shipping = cart.length ? (Total > 350 ? 0 : 40.95) : 0;
  const tex = (Total * 0.15).toFixed(2);
  const grandtotal = (Total + shipping).toFixed(2);
  return (
    <div className="cart-info">
      <h3>Order Summery</h3>
      <h5>Item Ordered : {cart.length}</h5>
      <h5>Shiping Cost :{shipping}</h5>
      <h5>Tax + Vat : {tex}</h5>
      <h5>Total Price: {parseFloat(grandtotal)}</h5>
      <button class= "confirm-order"><FontAwesomeIcon icon={faCheckCircle} />Confirm Order</button>
    </div>
  );
};

export default Cart;