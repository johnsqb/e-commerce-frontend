import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCartAsync = createAsyncThunk(
    "cart/addToCartAsync",
    async ({ product_id, quantity }) => {
      const token = sessionStorage.getItem('jwtToken')
      const response = await axios.post(
        "http://localhost:8081/cart/addToCart",
        { product_id, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    }
  );
  
const initialState=[];
const cartSlice = createSlice({

    name:'cart',
    initialState,
    reducers:{

        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item => item.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addToCartAsync.fulfilled, (state, action) => {
          state.push(action.payload);
        });
      },

});
export const{add,remove} = cartSlice.actions;
export default cartSlice.reducer;
