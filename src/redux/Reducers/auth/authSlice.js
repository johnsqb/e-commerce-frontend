// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import {getCurrentUserDetails} from "./CurrentUser"
const storedToken = sessionStorage.getItem('jwtToken');

const initialState = {
  token:storedToken,
  isAuthenticated: !!storedToken,
  loading: false,
  username: storedToken ? jwtDecode(storedToken).username : '',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart(state) {
      state.loading = true;
      state.error = null;
    },
    authSuccess(state, action) {


      console.log(action.payload.token);
      console.log("Auth Success Action Triggered");
      const decodedToken = jwtDecode(action.payload.token);


      console.log("Decoded Token:", decodedToken);
      
      

      
      state.loading = false;
      state.error = null;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.username = decodedToken.username;


    },
    authFail(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem('jwtToken')
      sessionStorage.removeItem('Name')
      sessionStorage.removeItem('userEmail')
      sessionStorage.removeItem('Id')
      sessionStorage.removeItem('CartId')

    },
  },
});


export const { authStart, authSuccess, authFail, logout } = authSlice.actions;


// Async action creator for login
export const login = (email, password) => async (dispatch) => {
  dispatch(authStart());

  try {
    
    const response = await axios.post('http://localhost:8080/ecommerce/v1/auth/authenticate', { email, password });
    const token  = response.data.access_token; // Assuming the API response contains a token field
    console.log(token);

    
    dispatch(authSuccess({ token }));
    sessionStorage.setItem('jwtToken', token); // Store token in localStorage

    // console.log('Calling getCurrentUserDetails with token:', token); // Add this line to check if the function is being called
    // await getCurrentUserDetails(token);

  } catch (error) {
    dispatch(authFail(error.message));
  }
};

export default authSlice.reducer;