import React from 'react'
import MultiFilters from '../MultiFilters'
import MegaMenu from './Megamenu'
import './Menu.css'
import SubMenu from './Submenu'
import SubMenus from './Submenu1'



const ProductList = () => {
  return (
    <>
    {/* <h1>product list</h1> */}
    <div className='Menus'>
    <MegaMenu/>
    <SubMenu/>
    <SubMenus/>
    </div> 
    <MultiFilters/>
   
    
    </>
  )
}

export default ProductList