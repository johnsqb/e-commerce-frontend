import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useState,useEffect } from 'react';
import { addToPostCartAsync } from '../../redux/Reducers/cart/postCartSlice';



const PostAddToCart = (props) => {

  const dispatch = useDispatch();


  const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const [role, setRole] = useState('');
//   const token = sessionStorage.getItem('jwtToken');
  // Default quantity to 1



//   useEffect(() => {
//     if (isAuthenticated && token) {

//       const decoded = jwtDecode(token);
//       setRole(decoded.roles);     
//     }
//   }, [isAuthenticated,token]);

  const ToCart = async(product,quantity) => {

    const cartId = 1;

    console.log(product);
    console.log(product.id);
    console.log(product.productsSkus[0].id)
    console.log(product.subCategories.id);
    console.log(quantity);
    
    

    dispatch(addToPostCartAsync({ productsId: product.id, cartId,quantity,productsSkuId:product.productsSkus[0].id }));
    alert("product added to cart");



    // if (!isAuthenticated) {
    //   navigate('/login');
    // } else {
    //   if (role === "ROLE_USER") {
    //     dispatch(addToCartAsync({ product_id: product.id, quantity }));
    //     alert("product added to cart");

          
    //     }
    //    else {
    //     alert("Please login as a user to add items to the cart.");
    //   }
    }

  
  return (

    <>
                    <a href="#;" className="btncar" onClick={()=>ToCart(props.product,props.quantity)}> Add To Cart  </a>
                    <a href="#;" className="btncar"> Check Out </a>

    </>
    
   
  )
}

export default PostAddToCart