import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserCart } from "./CartIdApi";

export const addUserToCart = (userId) => async (dispatch,{rejectWithValue }) => {
 
  console.log(userId);
  

  try {
    
    const response = await axios.post(`http://localhost:8080/api/cart/add?userId=${userId}` );
    // const token  = response.data.access_token; // Assuming the API response contains a token field
    // console.log(token);

    return response.data;
    // dispatch(authSuccess({ token }));
    // sessionStorage.setItem('jwtToken', token); // Store token in localStorage

    // console.log('Calling getCurrentUserDetails with token:', token); // Add this line to check if the function is being called
    // await getCurrentUserDetails(token);

  }catch (error) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data.message);
    }
    throw error;
  }
};

export const getUserFromCart = createAsyncThunk(
  'cart/getUserFromCart',
  async () => {
    try {
      const cartId = sessionStorage.getItem('CartId');
      const response = await axios.get(`http://localhost:8080/api/cart/getall/${cartId}`, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      console.log(response+" inside getUserFromCart ");
      
        const { payload } = response;
      return payload;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
);






// export const addToCartAsync = createAsyncThunk(
//     "cart/addToCartAsync",
//     async ({ product_id, quantity} ,{rejectWithValue }) => {
//       try {
//         const token = sessionStorage.getItem('jwtToken');
//         const response = await axios.post(
//           "http://localhost:8081/cart/add",
//           { product_id, quantity },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         return response.data;
//       } catch (error) {
//         if (error.response && error.response.data) {
//           return rejectWithValue(error.response.data.message);
//         }
//         throw error;
//       }
//     }
// );





const initialState = {
  cartItem: [], // This is where cart items should be stored
  loading: false,
  error: null,
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // add(state, action) {
    //   state.cartItems.push(action.payload);
    // },
    // remove(state, action) {
    //   state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    // },
  },


  extraReducers: (builder) => {
    builder

      .addCase(getUserFromCart.pending, (state) => {
        state.loading = true;
      })

      // .addCase(getUserFromCart.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.cartItems = action.payload.data; // Update cartItems with fetched data
      // })
      
      .addCase(getUserFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

});

// export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
