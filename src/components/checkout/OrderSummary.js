import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css/bundle';
import { SwiperSlide } from 'swiper/react';
import { deletePostCartItems, fetchPostCartItems, updateCartItemQuantity } from '../../redux/Reducers/cart/postCartSlice';

import './OrderSummary.css';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.postCart.postCartItems) || [] ;
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const cartId  = sessionStorage.getItem('CartId');
  
  const BASE_URL = 'http://localhost:8080';

  useEffect(() => {
    dispatch(fetchPostCartItems({cartId}));

  }, [dispatch]);

console.log(cartItems);

  const handleRemoveItem = (itemId) => {
    dispatch(deletePostCartItems({ product_id: itemId })); // Ensure you're passing the correct payload
};


  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity > 0) { // Prevent quantity from being less than 1
      dispatch(updateCartItemQuantity({ itemId, newQuantity }));
    }
  };

    const incrementQuantity = (itemId, currentQuantity) => {
      handleQuantityChange(itemId, currentQuantity + 1);
    };


    const decrementQuantity = (itemId, currentQuantity) => {
      if (currentQuantity > 1) {
        handleQuantityChange(itemId, currentQuantity - 1);
      }
    };
    
  

  return (
    <div className="checkout-card">
      <div className="header">
        <div className="step-number">2</div>
        <h2>Order Summary</h2>
      </div>
      <div className="content">
        
        {cartItems.length > 0 ? (
         cartItems.map(item => (
            <SwiperSlide key={item.id}>
            <div className="cart-item">
            <div className="product-image">
            <img 
            src={`${BASE_URL}${item.products?.image?.[0]?.filePath || ''}`}
            className="product-img"
            alt="Product"
            />
  
                

                  <div className="product-quantity">
                    <button 
                      className="quantity-button"
                      onClick={() => decrementQuantity(item.id, item.quantity)}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      value={item.quantity}
                      min="1" // Ensure minimum quantity is 1
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                      className="quantity-input small-input"
                      // style={{ appearance: 'textfield' }} // Removes the default browser arrows
                    />
                    <button 
                      className="quantity-button"
                      onClick={() => incrementQuantity(item.id, item.quantity)}
                    >
                      +
                    </button>
                    </div>
                </div>
                <div className="product-details">
                
                <h2 className="product-name">{item.products.name}</h2>
                <p className="product-description">{item.products.description}
                
                </p>
                <p className="product-price">
                  Price: <strong>${item.products.price *item.quantity }</strong>
                </p>
                
                <button 
                  className="remove-button" 
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
                 </div>
            </div>
            </SwiperSlide>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
     
        {/* <div className="total-amount">
          <h2>Total Amount: ${totalAmount}</h2>
        </div> */}
      </div>
    </div>
  );
};

export default OrderSummary;
