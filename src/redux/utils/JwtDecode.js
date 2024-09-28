// utils/auth.js
import { jwtDecode } from 'jwt-decode';

export const getToken = () => {
  return sessionStorage.getItem('jwtToken'); // or however you store your token
};

export const getUserRole = () => {
  const token = getToken();
  console.log(token);
  if (token) {         
    try {
      const decoded = jwtDecode(token);
      console.log(decoded.roles);
      return decoded.role[4].authority; // Adjust based on your JWT payload
    } catch (error) {
      console.error('Invalid token');
    }
  }
  return null;
};
