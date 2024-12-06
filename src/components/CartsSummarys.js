import React, { useState } from 'react';
import CartSummary from './CartSummary';
import AddressForm from './AddressForm';
import PaymentOptions from './Paymentoptions';
import OrderSummary from './OrderSummary';
import './stylesss.css';
import './CartSummary.css';
const CartsSummarys = () => {
  const [items] = useState([
    { name: 'Item 1', price: 29.99, image: 'https://via.placeholder.com/100' },
    { name: 'Item 2', price: 49.99, image: 'https://via.placeholder.com/100' }
  ]);

  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleAddressSubmit = (address) => {
    setAddress(address);
  };

  const handlePaymentSelect = (method) => {
    setPaymentMethod(method);
  };

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="checkout-page">
      <CartSummary items={items} />
      <div className="checkout-details">
        <AddressForm onSubmit={handleAddressSubmit} />
        <PaymentOptions onSelectPayment={handlePaymentSelect} />
        <OrderSummary total={total} />
      </div>
    </div>
  );
};

export default CartsSummarys;
