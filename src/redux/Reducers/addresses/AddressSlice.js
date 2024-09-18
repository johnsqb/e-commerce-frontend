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


            });
            
        },

    
});
export const selectAddress = (state) => state.address.userAddresses;
export const getAddressStatus = (state) => state.address.status;
export const getAddressError = (state) => state.address.error;

export default AddressSlice.reducer;