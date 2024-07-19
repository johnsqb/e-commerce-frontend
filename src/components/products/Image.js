import React from 'react'
import { Link } from 'react-router-dom'

const Image = (props) => {




  return (
    <div>

        <div className="image-holder">
            <Link to={`/product-details/${props.pro}`}>
            <img  src={props.imageUrl[1].imageUrl} alt="product-item" className="img-fluid" />
            </Link>
        </div>


    </div>
  )
}

export default Image