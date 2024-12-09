import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authStart, authSuccess, authFail, logout, login } from "../redux/Reducers/auth/authSlice"
import { Navigate } from 'react-router-dom';





const Login = () => {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const obj = useSelector(state=>state.auth.token)

  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');


  const handleLogin = async (e) => {
    e.preventDefault();
     dispatch(login(email, password));

     
   
  };
  if (isAuthenticated) {
    console.log("welcome ", email);
    return <Navigate to="/"/>;
  }

  

  return (

    <>
   
    <div className="container1">
    <div className="wrapper">
      <form action="" onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="email" required onChange={(e) => setEmail(e.target.value)}/>
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required  onChange={(e) => setPassword(e.target.value)}  />
          <i className='bx bxs-lock'></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password</a>
        </div>
        <button type="submit" className="submit-btn">Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="/reg">Register</a></p>
        </div>
      </form>
    </div>
  </div>
</>

    




  );
};

export default Login





