import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import { logDOM } from '@testing-library/react';

export const getCurrentUserDetails = async (token) => {
    try {

        console.log('getCurrentUserDetails called with token:', token); // Add this line for debugging


        const decoded = jwtDecode(token);
        const email=decoded.sub;
        console.log(""+ email);
        


      const response = await axios.get(`http://localhost:8080/api/users/userByEmail?email=${email}`, {
        headers: {
          Authorization: `Bearer ${token}` // Pass the JWT token in the Authorization header
        }
      });
  
      const userDetails = response.data;
      console.log(userDetails);
      
  
      // Store user details in sessionStorage
      sessionStorage.setItem('Name', userDetails.firstName);
      sessionStorage.setItem('userEmail', userDetails.email);
      sessionStorage.setItem('Id',userDetails.id)
  
      console.log('User details saved to sessionStorage:', userDetails);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };