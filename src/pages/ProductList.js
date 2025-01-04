import React from 'react'
import MultiFilters from '../MultiFilters'
import MegaMenu from './Megamenu'
import './Menu.css'
import SubMenu from './Submenu'
import SubMenus from './Submenu1'
import { useLocation } from 'react-router-dom'


const ProductList = () => {
  const location = useLocation();

  const category = location.state?.categoryName;

  console.log(category+ "insidr product list page");
  
  return (
    <>
    {/* <h1>product list</h1> */}
    <div className='Menus'>
    <MegaMenu/>
    <SubMenu/>
    <SubMenus/>
    </div> 
    <MultiFilters list={category}/>
   
    
    </>
  )
}

export default ProductList