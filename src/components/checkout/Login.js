import React from 'react'
import { useState } from 'react';

const Login = () => {

  const [isLoginExpanded, setIsLoginExpanded] = useState(false);
  const handleLoginToggle = () => setIsLoginExpanded(!isLoginExpanded);


    return (
      <>

<div className={`checkout-card ${isLoginExpanded ? "expanded" : ""}`}>
      <div className="header">
        <div className="step-number">1</div>
        <h2>LOGIN</h2>
      </div>
      <div className={`content ${isLoginExpanded ? "expanded" : ""}`}>
        {isLoginExpanded ? (
          <>
            <p>Name: Johns George C</p>
            <p>Phone: 9446462470</p>
            <br/>
            <a href="#" className="logout-link" onClick={() => alert('Logged out!')}>
              Logout & login to another account
            </a><br/>
            <button className="continue" onClick={handleLoginToggle}>
              Continue Checkout
            </button>
          </>
        ) : (
          <div className="compact-info">
            <span>Johns George C</span>
            <span>9446462470</span>
            <button className="change-button" onClick={handleLoginToggle}>
              Change
            </button>
          </div>
        )}
      </div>
    </div>       
      </>
    );
  };
  

export default Login