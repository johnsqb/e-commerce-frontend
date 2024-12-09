import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const PRODUCT_URL = 'http://localhost:8080/api/products/getall';

export const fetchPostgreProducts = createAsyncThunk(
  'postgreProducts/fetchproducts',
 
  async () => {
    
    const response = await axios.get(PRODUCT_URL);
    
    return response.data;
  },
);