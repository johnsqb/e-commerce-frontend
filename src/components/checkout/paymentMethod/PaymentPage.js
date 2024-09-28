
import React from 'react';

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <p>Confirm your payment details below:</p>
      {/* You can include more detailed information or options here */}
      <div className="payment-details">
        {/* Display payment details, e.g., amount, selected method */}
        <p>Amount: 500 INR</p> {/* Replace with actual amount */}
        <p>Payment Method: UPI</p> {/* Replace with selected method */}
      </div>
      <button className="confirm-button">Confirm Payment</button>
    </div>
  );
};

export default PaymentPage;
