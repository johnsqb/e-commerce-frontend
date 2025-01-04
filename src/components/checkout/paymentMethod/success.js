import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const location = useLocation();
  const orderId = new URLSearchParams(location.search).get('orderId'); // Assume you're passing orderId in query params

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/orderDetails/${orderId}`);
        setOrderDetails(response.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  if (!orderDetails) {
    return <p>Loading...</p>;
  }
  

  return (
    <div className="payment-success">
      <h1>Payment Successful</h1>
      <h2>Order Summary</h2>
      <div className="order-details">
        <img src={orderDetails.product.image} alt={orderDetails.product.description} />
        <p>Description: {orderDetails.product.description}</p>
        <p>Price: ₹{orderDetails.product.price}</p>
        <p>Total: ₹{orderDetails.total}</p>
      </div>
      <button onClick={() => window.location.href = '/'}>Go to Home</button>
    </div>
  );
};

export default PaymentSuccess;
