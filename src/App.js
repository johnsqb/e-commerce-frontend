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
import ProductList from './pages/ProductList.js';
import {Data} from './components/Data.js';
// import { Card } from '@mui/material';
import Card from './components/Card.js';
import Filter from './components/filter.js';
import Filters from './filters.js';
import Cards from './cards1.js';
import MultiFilters from './MultiFilters.js';





function App() {

  const token = sessionStorage.getItem('JwtToken');
  
   
  

  
  
  return (

    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      
            <Route   path='/product-details/:id'  index element={<ProductView />} />
          <Route 
            path='/cart' 
            element={<ProtectedRoutes allowedRoles={['ROLE_ADMIN','ROLE_USER']} />}
          >
            <Route index element={<Cart />} />
          </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/prolist' element={<ProductList />} />   {/*product list new*/}
         
      </Route>
      
    </Routes>
    
    {/* <MultiFilters/> 
    {/* <div className='fls'>
      <Filter/>
      </div> */}
    
    
    {/* {  
      <div>
        
      <div>
    {Data.map(item=>(
      <Card image={item.image} name={item.name} rating={item.rating} actualPrice={item.actualPrice} offerPrice={item.offerPrice}/>
      
    ))}
    </div>
    </div>
    
} */}


{/* <Filters/>

<Cards/> */}

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
