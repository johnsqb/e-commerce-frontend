// paymentService.js
import axios from 'axios';

export const createOrder = async (total) => {
  try {
    const response = await axios.post('http://localhost:8080/api/payment/createLink', {
      total,
    
    });
    return response.data; // Make sure your backend returns the correct response
  } catch (error) {
    throw new Error('Failed to create order: ' + error.message);
  }
};
