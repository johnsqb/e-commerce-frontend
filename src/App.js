import React from 'react'
import { useEffect } from "react"

import Home from './pages/Home.js';
import ProductView from './pages/ProductView.js';

// Import Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JavaScript
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar.js';
import Cart from './pages/Cart.js';
import Footer from './components/Footer.js';
import Slide from './components/slide.js';
import Carousell from './components/Carousel.js';
import Login from './pages/Login.js';

import JwtDecode from './redux/utils/JwtDecode.js';
import Layout from './Layout.js';
import ProtectedRoutes from './components/protectedRoutes/PotectedRoutes.js';



function App() {

  const token = sessionStorage.getItem('JwtToken');
  
   
  useEffect(() => {
    

    const scriptbill=document.createElement("script")
    const scripttestimoni=document.createElement("script")



    scriptbill.innerHTML = ` 
         var swiper = new Swiper(".main-swiper", {
        speed: 500,
        navigation: {
          nextEl: ".swiper-arrow-prev",
          prevEl: ".swiper-arrow-next",
          
        },
  
      
    })`

    scripttestimoni.innerHTML = ` 
        
        var swiper = new Swiper(".testimonial-swiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-arrow-prev",
          prevEl: ".swiper-arrow-next",
        },
      
      
    })`
  
    document.body.appendChild(scriptbill)
    document.body.appendChild(scripttestimoni)

  }, [])

  
  
  return (

    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route 
            path='/product-details/:id' 
            element={<ProtectedRoutes allowedRoles={['ROLE_USER']} />}
          >
            <Route index element={<ProductView />} />
          </Route>
          <Route 
            path='/cart' 
            element={<ProtectedRoutes allowedRoles={['ROLE_ADMIN','ROLE_USER']} />}
          >
            <Route index element={<Cart />} />
          </Route>
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
   
    // <BrowserRouter>
  
    // <Routes>

    //   <Route path='/' element={<Layout/>}>
    //   <Route index  element={<Home/>}/>
    //   {/* <Route
    //         path='/product-details/:id'
    //         element={
    //           <ProtectedRoutes
    //             element={<ProductView />} 
    //             allowedRoles={['ROLE_SELLER']} 
    //           />
    //         }
    //       /> */}
    //   <Route path='/product-details/:id' element={<ProductView/>}/>
    //   <Route path='/cart' element={<Cart/>}/>
    //   <Route path='/login' element={<Login/>}/>
    //   </Route>

    // </Routes>
    // </BrowserRouter>

   
    
  );
}

export default App;
