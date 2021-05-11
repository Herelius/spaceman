// eslint-disable-next-line import/no-duplicates
import React from 'react';
// eslint-disable-next-line import/no-duplicates
import { useState } from 'react';
import './cart.css';

function Cart() {
  const hotelPrice = 100;
  const [cart, updateCart] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="cart">
      <button
        type="button"
        className="buttonCloseCart"
        onClick={() => setIsOpen(false)}
      >
        Close Cart
      </button>
      <h2>Cart</h2>
      <div>
        Package : {hotelPrice}€
        <button type="button" onClick={() => updateCart(cart + 1)}>
          Add
        </button>
      </div>
      <h3>Total : {hotelPrice * cart}€</h3>
    </div>
  ) : (
    <button
      type="button"
      className="buttonOpenCart"
      onClick={() => setIsOpen(true)}
    >
      Open cart
    </button>
  );
}

export default Cart;
