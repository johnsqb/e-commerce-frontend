import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slide from './components/slide.js';
import Carousell from './components/Carousel.js';

const Layout = () => {
  return (
        <>
      <Navbar />
      <main className='main-content'>
        {/* <Slide /> */}
        {/* <Carousell /> */}
        <Outlet />
      </main>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
