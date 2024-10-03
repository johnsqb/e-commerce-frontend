import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';

const CartImage = (props) => {

  const navigate = useNavigate();


  const handleClick = (pro) => {


   
        
    navigate(`/product-details/${pro}`)
    
   
}


  return (

    <>
            <a onClick={()=>handleClick(props.pro)}>
            {/* <img  src={props.imageUrl[1].imageUrl} alt="product-item"  style={{width:'100%',height:'160px',objectFit:'contain',marginBottom:'10px',cursor:'pointer'}} className="imgs"  
              onClick={()=>handleClick(props.pro,props.imageUrl)}  /> */}
                  <img  src="/assets/images/multicar.png" alt="product-item"  style={{width:'100%',height:'160px',objectFit:'contain',marginBottom:'10px',cursor:'pointer'}} className="imgs"  
              onClick={()=>handleClick(props.pro)}  />
            </a>


    </>

        
        // <div className="image-holder">
        //     <a onClick={()=>handleClick(props.pro)}>
        //     <img  src={props.imageUrl[1].imageUrl} alt="product-item" className="img-fluid" />
        //     </a>
        // </div>


  )
}

export default CartImage