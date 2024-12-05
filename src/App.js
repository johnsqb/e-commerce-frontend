import React from 'react';

import Home from './pages/Home.js';
import PostProductView from './pages/PostProductView.js';
import ProductView from './pages/ProductView.js';

// Import Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JavaScript
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart.js';
import Login from './pages/Login.js';
 
import Layout from './Layout.js';
import ProtectedRoutes from './components/protectedRoutes/PotectedRoutes.js';
import CheckOutPage from './pages/CheckOutPage.js';
import ProductList from './pages/ProductList.js';

import Unauthorized from './components/Unauthorized.js';
import Success from './components/Success.js';

function App() {

  const token = sessionStorage.getItem('JwtToken');
  
  
  

  
  
  return (

    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />

      
            <Route   path='/product-details/:id'   element={<ProductView />} />
            <Route   path='/postproduct-details/:id'  index element={<PostProductView />} />
            <Route   path='/checkout'   element={<CheckOutPage />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/success" element={<Success />} />


          <Route 
            path='/cart' 
            element={<ProtectedRoutes allowedRoles={['ROLE_ADMIN','ROLE_CUSTOMER']} />}

          >
            <Route index element={<Cart />} />
          </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/prolist' element={<ProductList />} />   {/*product list new*/}
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
