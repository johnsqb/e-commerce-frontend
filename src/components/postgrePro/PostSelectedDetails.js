import React from 'react'
import PostAddToCart from './PostAddToCart'
import { useState } from 'react'
import { Button } from 'bootstrap';

const PostSelectedDetails = (props) => {

	const quantity=1;

	// const [quantity,setQuantity]=useState(1);


	
	 const price = props.sellingprice;
 
	

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
    <>
        <div className="col-md-6 col-sm-12">
					<div className="xzoom_details">
						<h4>{props.name}</h4>
						<h3> {price} </h3>
						<p><i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star-half-alt"></i>
							(35 Customer Review)
						</p>
						<h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore vero temporibus, accusamus magnam maxime quis sit, voluptates distinctio quasi ab tenetur quidem, assumenda. Dolor, non assumenda expedita officia obcaecati alias recusandae, aperiam rerum sapiente maiores repudiandae repellendus. Veniam temporibus eum sequi minima, ratione nulla, dolorum maxime saepe possimus, ipsam ex!</h6>
						{/* <!-- <div className="d-flex mb-4">
							<label for=""> Size: </label>
							<select name="" id="" className="form-control">
								<option value="1"> 1 Pound </option>
								<option value="2"> 1.5 Pound </option>
								<option value="3"> 2 Pound </option>
								<option value="4"> 2.5 Pound </option>
								<option value="5"> 3 Pound </option>
							</select>
						</div> --> */}
						
						<PostAddToCart product={props.pro} quantity={quantity}/>
						{/* <a href="#;" className="btncar" onClick={()=>add(props.pro)}> Add To Cart  </a>
						<a href="#;" className="btncar"> Check Out </a> */}
					</div>
				</div>
    </>
  )
}

export default PostSelectedDetails