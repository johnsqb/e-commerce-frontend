import React from 'react'

const OrderSummary = () => {
  return (
    <div>
         <div className="checkout-card">
        <div className="header">
          <span className="step-number">3</span>
          <h2>Order Summary</h2>
        </div>
        <div className="content">
          {/* Map your cart items here */}
          <p>Product 1: $100</p>
          <p>Product 2: $50</p>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary