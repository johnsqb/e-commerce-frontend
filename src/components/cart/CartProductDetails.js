import React from 'react'
import ProductView from '../../pages/ProductView'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Quantity from '../Quantity'

const CartProductDetails = (props) => {

  


  return (

    <div>
      
        <p style={{fontSize:'14px',padding:'5px 0'}}>{props.productName}</p>
    
        <Quantity price={props.price} id={props.id} quantity={props.quantity}/>

    </div>
  )
}

export default CartProductDetails

