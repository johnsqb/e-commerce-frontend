import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToPostCartAsync = createAsyncThunk(
    "postCart/addToCartAsync",
    async ({ productsId, cartId,quantity,productsSkuId }) => {
    //   const token = sessionStorage.getItem('jwtToken')
      const response = await axios.post(
        `http://localhost:8080/api/cartItem/add?cartId=${cartId}&&productsId=${productsId}&&productsSkuId=${productsSkuId}`,
        { quantity },
        {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        }
      );
      return response.data;
    }
  );

  export const fetchPostCartItems = createAsyncThunk(
    'postCart/fetchPostCartItems',
    async () => {
      try {
        // const token = sessionStorage.getItem('jwtToken');
        const response = await axios.get('http://localhost:8080/api/cartItem/getall', {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
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
        return response.data;
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
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item => item.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(addToPostCartAsync.pending, (state) => {
          state.loading = true;
        })
        .addCase(addToPostCartAsync.fulfilled, (state, action) => {
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
        });
      

      },

});
export const{add,remove} = postCartSlice.actions;
export default postCartSlice.reducer;
