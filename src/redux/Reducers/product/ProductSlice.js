import {  createSlice} from '@reduxjs/toolkit'
import {getProducts} from './ProductApi';
import { initialState } from './ProductInitialState';

import StatusCode from "../../utils/StatusCode";

// const initialState = {
//    data:[],
//    status:StatusCode.IDLE

// };
const productSlice  = createSlice({

   name:'products',
   initialState,
   reducers:{
 
   },

   extraReducers:(builder)=>{

       builder
       .addCase(getProducts.pending,(state,action)=>{
           state.status = StatusCode.LOADING
       })
       .addCase(getProducts.fulfilled,(state,action)=>{

           state.data=action.payload
           state.status = StatusCode.IDLE
        })

        .addCase(getProducts.rejected,(state,action)=>{
           state.status = StatusCode.ERROR
       });
       
   },

   
}); 




export default productSlice.reducer;

// export const{fetchproducts} = productSlice.actions;/


 

//   const JwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2hucyIsImlhdCI6MTcxOTgxNTI4MCwiZXhwIjoxNzE5ODE4ODgwfQ.hcnTX-2kHVdWlYbQJskHE9TXJeEiD8QQkIQdIyQxG8U';

//   export  const getProducts = createAsyncThunk('products/get' ,async()=>{

//    try{
//    const response = await axios.get("http://localhost:8080/rest/showAll",{

//       headers:{
//          Authorization: `Bearer ${JwtToken}`
//       }
      
//    });
//    return response.data; // Assuming the API response contains data field

// } catch (error) {
//   console.error('Error fetching products:', error);
//   throw error; // Rethrow the error so that the rejected action contains the error object
// }
// });

  

