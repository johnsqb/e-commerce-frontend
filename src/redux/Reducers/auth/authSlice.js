// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
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
      const decodedToken = jwtDecode(action.payload.token);
      console.log(decodedToken);
      
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
    },
  },
});

export const { authStart, authSuccess, authFail, logout } = authSlice.actions;

// Async action creator for login
export const login = (username, password) => async (dispatch) => {
  dispatch(authStart());

  try {
    const response = await axios.post('http://localhost:8081/auth/authenticate', { username, password });
    const token  = response.data; // Assuming the API response contains a token field
    
    dispatch(authSuccess({ token }));
    sessionStorage.setItem('jwtToken', token); // Store token in localStorage

  } catch (error) {
    dispatch(authFail(error.message));
  }
};

export default authSlice.reducer;
