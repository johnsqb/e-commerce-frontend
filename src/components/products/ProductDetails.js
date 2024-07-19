import React from 'react'
import ProductView from '../../pages/ProductView'
import { Link } from 'react-router-dom'

const ProductDetails = (props) => {


  const productDetails= ()=>{

      
  }
  return (
    <div>
        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
            <h3 className="card-title text-uppercase">
            <Link to={`/product-details/${props.pro}`}>
            {props.productName}</Link>
            </h3>
            <span className="item-price text-primary">INR:{props.price}</span>
        </div>
    </div>
  )
}

export default ProductDetails

