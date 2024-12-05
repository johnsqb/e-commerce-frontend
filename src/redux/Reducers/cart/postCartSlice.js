import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToPostCartAsync = createAsyncThunk(
    "postCart/addToCartAsync",
    async ({ productsId, cartId,quantity,productsSkuId }) => {
    //   const token = sessionStorage.getItem('jwtToken')
      const response = await axios.post(
        `http://localhost:8080/api/cartItem/add?cartId=${cartId}&productsId=${productsId}&productsSkuId=${productsSkuId}`,
        { quantity },
        {
          // params: {
          //   cartId,
          //   productsId,
          //   productsSkuId,
          // },
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        }
      );
      return response.data;
    }
  );

  export const updateCartItemQuantity = createAsyncThunk(
    'postCart/updateCartItemQuantity',
    async ({ itemId, newQuantity }) => {
      // Send the updated quantity to the backend
      const response = await axios.put(`http://localhost:8080/api/cartItem/${itemId}`, {
        quantity: newQuantity,
      });
      return { itemId, newQuantity };// Adjust as needed based on your API response
      // Adjust as needed based on your API response
    }
  );

  export const fetchPostCartItems = createAsyncThunk(
    'postCart/fetchPostCartItems',
    async ({cartId}) => {
      try {
        const token = sessionStorage.getItem('jwtToken');
        const response = await axios.get(`http://localhost:8080/api/cartItem/getByUser?id=${cartId}`, {
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
  
  export const deletePostCartItems = createAsyncThunk(
    'postCart/deletePostCartItems',
    async ({ product_id}) => {
      try {
        // const token = sessionStorage.getItem('jwtToken');
        const response = await axios.delete(`http://localhost:8080/api/cartItem/${product_id}`, {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        });
        // return response.data;
        return product_id;
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
    }
  );

  const initialState = {
    postCartItems: [], // This is where cart items should be stored
    loading: false,
    error: null,
  };

  

const postCartSlice = createSlice({

    name:'postCart',
    initialState,
    reducers:{

        add(state,action){
            state.postCartItems.push(action.payload)
        },
        remove(state,action){
            return state.postCartItems.filter(item => item.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(addToPostCartAsync.pending, (state) => {
          state.loading = true;
        })
        .addCase(addToPostCartAsync.fulfilled, (state, action) => {
          state.loading = false;
             state.postCartItems.push(action.payload);
        })
        .addCase(addToPostCartAsync.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
       
       
        .addCase(fetchPostCartItems.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchPostCartItems.fulfilled, (state, action) => {
          state.loading = false;
          state.postCartItems = action.payload; // Update cartItems with fetched data
        })
        .addCase(fetchPostCartItems.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(deletePostCartItems.pending, (state) => {
          state.loading = true;
        })
        .addCase(deletePostCartItems.fulfilled, (state, action) => {
          state.loading = false;
          state.postCartItems = state.postCartItems.filter(
            item => item.id !== action.payload
          );
        })
        .addCase(deletePostCartItems.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(updateCartItemQuantity.pending, (state) => {
          state.loading = true;
        })
        .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
         
          const { itemId, newQuantity } = action.payload;
          const item = state.postCartItems.find(item => item.id === itemId);
          if (item) {
            item.quantity = newQuantity; // Update the quantity in the state
          }
        })
        .addCase(updateCartItemQuantity.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });

      },

});
export const{add,remove} = postCartSlice.actions;
export default postCartSlice.reducer;
