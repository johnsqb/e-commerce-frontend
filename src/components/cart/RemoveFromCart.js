import { useEffect } from 'react';
import React from 'react'
import { deleteCartItems,fetchCartItems } from '../../redux/Reducers/cart/CartSlice';
import { fetchPostCartItems,deletePostCartItems } from '../../redux/Reducers/cart/postCartSlice';
import { useDispatch } from 'react-redux';

const RemoveFromCart = (props) => {

  const dispatch = useDispatch();
  const cartId = sessionStorage.getItem('CartId');

    // useEffect(() => {
    //   const displayTotal = async () => {
    //     await dispatch(fetchPostCartItems({ cartId }));
    //   };
      
    //   displayTotal();
    //   }, [dispatch, cartId]);

  const RemoveCart = async(product) => {


    console.log(product+" product removed");
    console.log(product.id);



    // if (!isAuthenticated) {
    //   navigate('/login');
    // } else {
    //   if (role === "ROLE_USER") {
       await dispatch(deletePostCartItems({ product_id: product}));

       await dispatch(fetchPostCartItems());

        // alert("product removed from cart");

        

          
    //     }
    //    else {
    //     alert("Please login as a user to add items to the cart.");
    //   }
    // }
  };
  return (
    
    <div>


          <button onClick={()=>RemoveCart(props.product)}>Remove from cart</button>
         {/* <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black" onClick={()=>RemoveCart(props.product)}>
                           Remove from Cart
                          <svg className="cart-outline">
                          <use xlinkHref="#cart-outline"></use>
                          </svg>
                      </a>,
                    </div>
            </div> */}
    </div>
  )
}

export default RemoveFromCart

