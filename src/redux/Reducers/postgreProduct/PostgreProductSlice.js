import { createSlice} from "@reduxjs/toolkit";
import {initialState} from "./PostgreProductInitialState";
import { fetchPostgreProducts } from "./PostgreproductApi";
import StatusCode from "../../utils/StatusCode";


const postgreProductSlice = createSlice({

    name:'postgreProducts',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{

          builder
            .addCase(fetchPostgreProducts.pending,(state,action)=>{
                state.status = StatusCode.LOADING
            })
            .addCase(fetchPostgreProducts.fulfilled,(state,action)=>{
     
                state.postgreProducts=action.payload
                state.status = StatusCode.SUCCESS
             })
     
             .addCase(fetchPostgreProducts.rejected,(state,action)=>{
                state.status = StatusCode.ERROR
                state.error = action.error.message;


            });
            
        },

    
});
export const selectAllProducts = (state) => state.postgreProduct.postgreProducts;
export const getProductsStatus = (state) => state.postgreProduct.status;
export const getProductsError = (state) => state.postgreProduct.error;

export default postgreProductSlice.reducer;