import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addNewAddress = createAsyncThunk(
  'userAddresses/addNewAddress',
  async ({ id, newAddress }, { rejectWithValue }) => {
    
    try {
      const response = await axios.post(`http://localhost:8080/api/address/add?id=${id}`,newAddress);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
