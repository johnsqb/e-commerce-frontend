import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {logout,authSuccess} from '../redux/Reducers/auth/authSlice'
import { Link, Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { useState,useEffect } from 'react';

const Navbar = () => {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [redirectToHome, setRedirectToHome] = useState(false);

  console.log(isAuthenticated);
  const [username,setUsername] = useState('')

  
  const dispatch = useDispatch();

  useEffect(()=>{

    const jwtoken = sessionStorage.getItem('jwtToken');

    if(jwtoken){

        const decode=jwtDecode(jwtoken);
        console.log(decode);
        setUsername(decode.sub);
        dispatch(authSuccess({token:jwtoken}));
    }


},[dispatch])

  const handleLogout = () => {

    // Dispatch logout action
    dispatch(logout());
    window.location.href = "/"; // Forces a page reload to ensure Navbar is displayed


};




   
  

  
  return (
    <div>
      <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
      <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src="assets/images/main-logo.png" className="logo"/>
          </a>
          <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <svg className="navbar-icon">
              <use xlinkHref="#navbar-icon"></use>
            </svg>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
            <div className="offcanvas-header px-4 pb-0">
              <a className="navbar-brand" href="index.html">
                <img src="assets/images/main-logo.png" className="logo"/>
              </a>
              <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar">
                
              </button>
            </div>
            <div className="offcanvas-body">
              <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link me-4 active" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#company-services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#mobile-products">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#smart-watches">Watches</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#yearly-sale">Sale</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#latest-blog">Blog</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="about.html" className="dropdown-item">About</a>
                    </li>
                    <li>
                      <a href="blog.html" className="dropdown-item">Blog</a>
                    </li>
                    <li>
                      <a href="shop.html" className="dropdown-item">Shop</a>
                    </li>
                    <li>
                      <a href="cart.html" className="dropdown-item">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html" className="dropdown-item">Checkout</a>
                    </li>
                    <li>
                      <a href="single-post.html" className="dropdown-item">Single Post</a>
                    </li>
                    <li>
                      <a href="single-product.html" className="dropdown-item">Single Product</a>
                    </li>
                    <li>
                      <a href="contact.html" className="dropdown-item">Contact</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <div className="user-items ps-5">
                    <ul className="d-flex justify-content-end list-unstyled">
                      <li className="search-item pe-3">
                        <a href="#" className="search-button">
                          <svg className="search">
                            <use xlinkHref="#search"></use>
                          </svg>
                        </a>
                      </li>
                      
                      <li className="pe-3">
                        {!isAuthenticated?(
                        <a href="/login">
                          <svg className="user">
                            <use xlinkHref="#user"></use>
                          </svg>
                        </a>):
                        (   <>
                          <span>Hi,{username  }</span>
                          <button onClick={handleLogout} >Logout</button>
                        </>)
}   
                      </li>
                      <li>
                        <a href="/cart" as={Link}>
                          <svg className="cart">
                            <use xlinkHref="#cart"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>

    </div>
  )
}

export default Navbar