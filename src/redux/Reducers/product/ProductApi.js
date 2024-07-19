
import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';



const JwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXRoZXdzIiwiaWF0IjoxNzIxMjk2MzYxLCJleHAiOjE3MjEyOTk5NjF9.AXWH6foQyq5n0iUvYZ-TiOMIWvcxGB5vpsE4uF08cI4';
export  const getProducts = createAsyncThunk('products/get' ,async()=>{

 try{
 const response = await axios.get("http://localhost:8080/rest/showAll",{

    headers:{
       Authorization: `Bearer ${JwtToken}`
    }

    
 });
 return response.data; // Assuming the API response contains data field

} catch (error) {
console.error('Error fetching products:', error);
throw error; // Rethrow the error so that the rejected action contains the error object
}
});