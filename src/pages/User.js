import React, { useState } from 'react'



const User = () => {

  const [username,setUsername] =useState('');
  const [password,setPassword] =useState('');

  const submitForm = (username,password)=>{

    console.log(username);
    console.log(password);

  }

  return (

    <>
    <div className="container1">
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="username" required onChange={(e) => setUsername(e.target.value)}/>
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
        <button type="submit" className="submit-btn" onClick={()=>{submitForm(username,password)}}>Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  </div>
  </>

    




  );
};

export default User





