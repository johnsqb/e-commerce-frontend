import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const editAddress = createAsyncThunk(
  'userAddresses/editAddress',
  async ({ addressId, updatedAddress }, { rejectWithValue }) => {
    
    try {
      const response = await axios.put(`http://localhost:8080/api/address/${addressId}`,updatedAddress);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
