import React from 'react';


const OrderSummary = ({ total }) => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p>Total: ${total}</p>
    </div>
  );
};

export default OrderSummary;