import React from 'react'
import { useState,useEffect } from 'react';
import { updateCartItemQuantity } from '../redux/Reducers/cart/postCartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostCartItems } from '../redux/Reducers/cart/postCartSlice';
const Quantity = (props) => {

    const quantity1=props.quantity;
	const [quantity,setQuantity]=useState(quantity1);
	const cartId = sessionStorage.getItem('CartId');

 const price =props.price;

 const cartItemId=props.id;
	  const dispatch = useDispatch();
	
 
	

	const handleIncrement = ()=>{

		if(quantity<10){

		setQuantity(prevCount=>prevCount+1)
		
		
		}

	}

	const handleDecrement = ()=>{

		if(quantity>1){

		setQuantity(prevCount=>prevCount-1)
		console.log(quantity+ " inside decrement");


		}

	}
	console.log(quantity);

	useEffect(() => {
		const updateCart = async () => {
		  await dispatch(updateCartItemQuantity({ cartItemId, quantity }));
		  await dispatch(fetchPostCartItems({ cartId }));
		};
	  
		updateCart();
	  }, [dispatch, cartId, cartItemId, quantity]);

	  
	
  return (
    <div>
		<p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>₹ {price*quantity}</p>
        		<div className="d-flex">
					
							<label for=""> Qty: </label>
							<button type="button"  className="input-type-button" onClick={handleIncrement}>+</button>
							{/* <input type="text"  className="form-control"/> */}
							<div className="form-control" >{quantity}</div>
							<button type="button" className="input-type-button"  onClick={handleDecrement}>-</button>
				</div>
    </div>
  )
}

export default Quantity