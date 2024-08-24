
import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

// const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXRoZXdzIiwiaWF0IjoxNzIxNDEzMDcxLCJleHAiOjE3MjE0MTY2NzF9.JCY05f2vD7BNoLLkPI4-i9VNRIgxvC_2X-3ubjP2lu0'

export  const getProducts = createAsyncThunk('products/get' ,async()=>{
   
 
    try{
//  const response = await axios.get("http://localhost:8080/rest/showAll",{

//     headers:{
//        Authorization: `Bearer ${token}`
//     }

    
//  });
const response = await axios.get("http://localhost:8081/rest/showAll");

 return response.data; // Assuming the API response contains data field

} catch (error) {
console.error('Error fetching products:', error);
throw error; // Rethrow the error so that the rejected action contains the error object
}
});