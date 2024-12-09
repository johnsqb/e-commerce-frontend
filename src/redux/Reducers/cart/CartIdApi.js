import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import { logDOM } from '@testing-library/react';

export const getUserCart = async () => {
   console.log("hi welconme to find cartId");
   const cartId = sessionStorage.getItem('Id')

    try {

        console.log("cartid in getusercart"+ cartId);
        

      const response = await axios.get(`http://localhost:8080/api/cart/getCartByUser?id=${cartId}`, {
        // headers: {
        //   Authorization: `Bearer ${token}` // Pass the JWT token in the Authorization header
        // }
      });
  
      const userDetails = response.data;
      console.log(userDetails);
      
  
      // Store user details in sessionStorage
       sessionStorage.setItem('CartId', userDetails.id);
    
  
      console.log('User details saved to sessionStorage:', userDetails);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };