import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useState,useEffect } from 'react';
import { addToCartAsync } from '../../redux/Reducers/cart/cartSlice';



const AddToCart = (props) => {

  const dispatch = useDispatch();


  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [role, setRole] = useState('');
  const token = sessionStorage.getItem('jwtToken');
  const [quantity, setQuantity] = useState(1); // Default quantity to 1



  useEffect(() => {
    if (isAuthenticated && token) {

      const decoded = jwtDecode(token);
      setRole(decoded.roles);     
    }
  }, [isAuthenticated,token]);

  const ToCart = async(product) => {

    console.log(product);
    console.log(product.id);



    if (!isAuthenticated) {
      navigate('/login');
    } else {
      if (role === "ROLE_USER") {
        dispatch(addToCartAsync({ product_id: product.id, quantity }));
        
        alert("product added to cart");

          
        }
       else {
        alert("Please login as a user to add items to the cart.");
      }
    }
  };
  return (

    <div>
         <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black" onClick={()=>ToCart(props.product)}>
                           Add to Cart
                          <svg className="cart-outline">
                          <use xlinkHref="#cart-outline"></use>
                          </svg>
                      </a>,
                    </div>
            </div>
    </div>
  )
}

export default AddToCart