import React from 'react'
import ProductView from '../../pages/ProductView'
import { Link } from 'react-router-dom'

const PostProductDetails = (props) => {

  // const navigate = useNavigate();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const token = sessionStorage.getItem('jwtToken');

  // const productDetails= ()=>{

      
  // }
  return (
    <div>
         <p style={{fontSize:'14px',padding:'5px 0'}}>{props.productName}</p>
         <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>₹ {props.price}</p>
         {/* <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p> */}

    </div>
  )
}

export default PostProductDetails

