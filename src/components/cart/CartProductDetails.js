import React from 'react'
import ProductView from '../../pages/ProductView'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Quantity from '../Quantity'

const CartProductDetails = (props) => {

  
	// const [quantity,setQuantity]=useState(props.quantity);


	
	// const price = props.sellingprice;
 
	

	// const handleIncrement = ()=>{

	// 	if(quantity<10){

	// 	setQuantity(prevCount=>prevCount+1)
		
	// 	}
	// }

	// const handleDecrement = ()=>{

	// 	if(quantity>1){

	// 	setQuantity(prevCount=>prevCount-1)

	// 	}
	// }
	

  return (

//     <div>
//     <p style={{fontSize:'14px',padding:'5px 0'}}>{props.productName}</p>
//     <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>₹ {props.price}</p>
//     {/* <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p> */}

// </div>



    <div>
      
      <p style={{fontSize:'14px',padding:'5px 0'}}>{props.productName}</p>
    <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>₹ {props.price}</p>
    <Quantity/>

          {/* <div className="d-flex">
  
             <label for=""> Qty:  </label>
							<button type="button"  className="input-type-button" onClick={handleIncrement}>+</button>
							{/* <input type="text"  className="form-control"/> 
							<div className="form-control" >{quantity}</div>
							<button type="button" className="input-type-button"  onClick={handleDecrement}>-</button>
          
          </div>
						 */}

    {/* <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p> */}



        {/* <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
            <h3 className="card-title text-uppercase">
            <Link to={`/product-details/${props.pro}`}>
            {props.productName}</Link>
            </h3>
            <span className="item-price text-primary">INR:{props.price}</span>
        </div> */}
    </div>
  )
}

export default CartProductDetails

