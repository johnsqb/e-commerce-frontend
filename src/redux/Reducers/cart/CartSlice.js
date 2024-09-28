import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCartAsync = createAsyncThunk(
    "cart/addToCartAsync",
    async ({ product_id, quantity} ,{rejectWithValue }) => {
      try {
        const token = sessionStorage.getItem('jwtToken');
        const response = await axios.post(
          "http://localhost:8081/cart/add",
          { product_id, quantity },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        if (error.response && error.response.data) {
          return rejectWithValue(error.response.data.message);
        }
        throw error;
      }
    }
);

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async () => {
    try {
      const token = sessionStorage.getItem('jwtToken');
      const response = await axios.get('http://localhost:8081/cart/getall', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
);

export const deleteCartItems = createAsyncThunk(
  'cart/deleteCartItems',
  async ({ product_id}) => {
    try {
      const token = sessionStorage.getItem('jwtToken');
      const response = await axios.delete(`http://localhost:8081/cart?cartid=${product_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
);

const initialState = {
  cartItems: [], // This is where cart items should be stored
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      state.cartItems.push(action.payload);
    },
    remove(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.cartItems.push(action.payload);
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload; // Update cartItems with fetched data
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
