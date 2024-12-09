import { createSlice} from "@reduxjs/toolkit";
import {initialState} from "./AddressInitialState";
import { fetchAddresses } from "./AddressApi";
import StatusCode from "../../utils/StatusCode";


const AddressSlice = createSlice({

    name:'userAddresses',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{

          builder
            .addCase(fetchAddresses.pending,(state,action)=>{
                state.status = StatusCode.LOADING
            })
            .addCase(fetchAddresses.fulfilled,(state,action)=>{
     
                state.userAddresses=action.payload
                state.status = StatusCode.SUCCESS
             })
     
             .addCase(fetchAddresses.rejected,(state,action)=>{
                state.status = StatusCode.ERROR
                state.error = action.error.message;


            })
            
            // .addCase(addNewAddress.fulfilled, (state, action) => {
            //     state.products.push(action.payload); // Add the new category to the state
            //     state.status = StatusCode.SUCCESS
      
            // })
            
            // .addCase(addNewAddress.pending,(state,action)=>{
            //     state.status = StatusCode.LOADING
            // });
            
        },

    
});


export default AddressSlice.reducer;