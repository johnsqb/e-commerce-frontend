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
  
const initialState=[];
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
        builder.addCase(addToPostCartAsync.fulfilled, (state, action) => {
          state.push(action.payload);
        });
      },

});
export const{add,remove} = postCartSlice.actions;
export default postCartSlice.reducer;
