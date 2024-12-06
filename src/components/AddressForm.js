import React, { useState } from 'react';

const AddressForm = ({ onSubmit }) => {
  const [address, setAddress] = useState('');

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(address);
  };

  return (
    <form className="address-form" onSubmit={handleSubmit}>
      <h2>Shipping Address</h2>
      <textarea 
        value={address} 
        onChange={handleChange} 
        placeholder="Enter your address here..."
        required
      />
      <button type="submit">Save & Continue</button>
    </form>
  );
};

export default AddressForm;