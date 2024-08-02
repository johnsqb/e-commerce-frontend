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
import User from './pages/User.js';
import Footer from './components/Footer.js';
import Slide from './components/slide.js';
import Carousell from './components/Carousel.js';
function App() {
   
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
    <div>
   
    <Navbar/>
    
    <main className='main-content'>
    
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/product-details/:id' element={<ProductView/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/user' element={<User/>}/>


 
      </Routes>
     
      </main>

      
      </div>
    </BrowserRouter>
      
    
  );
}

export default App;
