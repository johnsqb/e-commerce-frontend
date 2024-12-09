import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToPostCartAsync } from '../../redux/Reducers/cart/postCartSlice';

const PostAddToCart = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [role, setRole] = useState('');
  const token = sessionStorage.getItem('jwtToken');
  const [pincode, setPincode] = useState('');
  const [deliveryAvailable, setDeliveryAvailable] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {


    if (isAuthenticated && token) {
      
      try {

        const decoded = jwtDecode(token);
        if (decoded.role && Array.isArray(decoded.role) && decoded.role[4]) {
          setRole(decoded.role[4].authority); // Access the 'authority' field
        }

      } catch (error) {
        console.error("Error decoding token:", error);
      }
        
     
    }
  }, [isAuthenticated, token]);
  


  const checkPincodeDelivery = async (productId, pinCode) => {
    

    try {
      console.log(pincode +" "+  productId);
      
      const response = await axios.get(`http://localhost:8080/api/productpincodes/checkDelivery`, {

        params: { productId, pinCode },

      });

      console.log(response.data + "pincode delivery");
      
      return response.data; // Adjust to your API response

    } catch (error) {

      console.error("Error checking delivery availability:" , error);

      return false;
    }
  };


  const handleCheckDelivery = async () => {

    setLoading(true);

    setDeliveryAvailable(null);

    try {

      const deliveryPossible = await checkPincodeDelivery(props.product.id, pincode);
      
      setDeliveryAvailable(deliveryPossible);

    } catch (error) {

      console.error("Error checking delivery:", error);

    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (product, quantity) => {
    
    console.log(product.productsSkus[0]+" "+quantity);
    const skuid = product.productsSkus[0].id;
    
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    
    if (role !== "ROLE_CUSTOMER") {
      alert("Please login as a user to add items to the cart.");
      return;
    }


    if (deliveryAvailable) {

      try {

        await dispatch(addToPostCartAsync({

          productsId: product.id,
          cartId: sessionStorage.getItem('CartId'), // You may want to dynamically fetch or manage this cartId
          quantity,
          productsSkuId: skuid

      }));

        alert("Product added to cart");

      } catch (error) {

        console.error("Error adding product to cart:", error);
        alert("There was an issue adding the product to your cart.");

      }
    } 
    else {

      alert(`Delivery not available for pincode: ${pincode}`);

    }
  };


  return (
    <>
      <div>
        <label htmlFor="pincode-input">Enter Pincode:</label>
        <input
          id="pincode-input"
          type="text"
          placeholder="Enter Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))} // Allow only numeric input
          disabled={loading}
        />

        <button onClick={handleCheckDelivery} disabled={loading || !pincode}>
          {loading ? "Checking..." : "Check Delivery"}
        </button>
        {deliveryAvailable !== null && (
          <p>
            {deliveryAvailable
              ? "Delivery is available for this pincode."
              : "Delivery not available for this pincode."}
          </p>
        )}
      </div>
      <button
        className={`btncar ${deliveryAvailable === false ? "disabled" : ""}`}
        onClick={() => deliveryAvailable && handleAddToCart(props.product, props.quantity)}
        disabled={deliveryAvailable === false || deliveryAvailable === null}
      >
        Add To Cart
      </button>
      {/* <button
        className={`btncar ${deliveryAvailable === false ? "disabled" : ""}`}
        onClick={() => deliveryAvailable && handleAddToCart(props.product, props.quantity)}
        disabled={deliveryAvailable === false || deliveryAvailable === null}
      >
        Checkout
      </button> */}
    </>
  );
};

export default PostAddToCart;
