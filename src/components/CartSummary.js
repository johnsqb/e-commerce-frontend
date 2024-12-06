import React from 'react';
import './CartSummary.css'; // Create corresponding CSS file

const CartSummary = ({ items }) => {
  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      {items.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </div>
        </div>
      ))}
      <div className="total">
        <h3>Total: ${items.reduce((acc, item) => acc + item.price, 0)}</h3>
      </div>
    </div>
  );
};

export default CartSummary;