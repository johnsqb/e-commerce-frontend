import React from 'react'
import { useState } from 'react';

const Quantity = () => {

    
	const [quantity,setQuantity]=useState(1);


	
 
	

	const handleIncrement = ()=>{

		if(quantity<10){

		setQuantity(prevCount=>prevCount+1)
		
		}
	}

	const handleDecrement = ()=>{

		if(quantity>1){

		setQuantity(prevCount=>prevCount-1)

		}

	}
	console.log(quantity);
	
  return (
    <div>
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