import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';

const CartImage = (props) => {

  const navigate = useNavigate();


  const handleClick = (pro) => {


   
        
    navigate(`/product-details/${pro}`)
    
   
}


  return (
    <div>

        
        <div className="image-holder">
            <a onClick={()=>handleClick(props.pro)}>
            <img  src={props.imageUrl[1].imageUrl} alt="product-item" className="img-fluid" />
            </a>
        </div>


    </div>
  )
}

export default CartImage