// eslint-disable-next-line import/no-duplicates
import React from 'react';
// eslint-disable-next-line import/no-duplicates
import { useState } from 'react';
import './cart.css';

function Cart() {
  const hotelPrice = 100;
  const [cart, updateCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="cart">
      <button type="button" onClick={() => setIsOpen(false)}>
        Close
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
    <button type="button" onClick={() => setIsOpen(true)}>
      Open cart
    </button>
  );
}

export default Cart;
