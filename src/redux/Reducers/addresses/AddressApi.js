import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const ADDRESS_URL = 'http://localhost:8080/api/address/getByUser';

export const fetchAddresses = createAsyncThunk(
  'userAddresses/fetchAddresses',
 
  async ({userId}) => {
    
    const response = await axios.get(`http://localhost:8080/api/address/getByUser?userId=${userId}`);
    
    return response.data;
  },
);