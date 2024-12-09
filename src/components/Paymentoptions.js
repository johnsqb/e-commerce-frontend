import React, { useState } from 'react';
// Create corresponding CSS file

const PaymentOptions = ({ onSelectPayment }) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleChange = (e) => {
    setPaymentMethod(e.target.value);
    onSelectPayment(e.target.value);
  };

  return (
    <div className="payment-options">
      <h2>Payment Options</h2>
      <label>
        <input
          type="radio"
          value="creditCard"
          checked={paymentMethod === 'creditCard'}
          onChange={handleChange}
        />
        Credit Card
      </label>
      <label>
        <input
          type="radio"
          value="debitCard"
          checked={paymentMethod === 'debitCard'}
          onChange={handleChange}
        />
        Debit Card
      </label>
      <label>
        <input
          type="radio"
          value="paypal"
          checked={paymentMethod === 'paypal'}
          onChange={handleChange}
        />
        PayPal
      </label>
    </div>
  );
};

export default PaymentOptions;
