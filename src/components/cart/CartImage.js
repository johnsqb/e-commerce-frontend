import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';

const CartImage = (props) => {

  const navigate = useNavigate();
  const BASE_URL = 'http://localhost:8080';

  const product = props.pro;
  const  image = product.image;
  const filePath = product.image[0].filePath;

  const handleClick = (id,url) => {


   
        
    navigate(`/postproduct-details/${id}`,{ state: { url } })
    
   
}

  return (

    <>
            <a >
            {/* <img  src={props.imageUrl[1].imageUrl} alt="product-item"  style={{width:'100%',height:'160px',objectFit:'contain',marginBottom:'10px',cursor:'pointer'}} className="imgs"  
              onClick={()=>handleClick(props.pro,props.imageUrl)}  /> */}
                  <img  src={`${BASE_URL}${filePath}`} alt="product-item"  style={{width:'100%',height:'160px',objectFit:'contain',marginBottom:'10px',cursor:'pointer'}} className="imgs"  
              onClick={()=>handleClick(product.id,image)} />
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