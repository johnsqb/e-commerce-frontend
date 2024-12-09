// import React, { useState, useEffect } from 'react';
// import './ProductDetails.css'; // Import a CSS file for styling
// import { useDispatch ,useSelector} from 'react-redux';
// import {  fetchPostCartItems, updateCartItemQuantity } from '../../redux/Reducers/cart/postCartSlice';
// const ProductDetails = () => {
//   // Example product data
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.postCart.postCartItems) || [] ;

//   useEffect(() => {
//     dispatch(fetchPostCartItems());
    
//   }, [dispatch]);
//   // State variables

//   const [quantity, setQuantity] = useState(1);
//   const deliveryCharge = 100; // Fixed delivery charge
//   const platformFee = 3; // Fixed platform fee
//   const item = cartItems.find((cartItem) => cartItem.id === item); // Adjust this based on your cart item's structure
// //   // Calculate the total amount
// //   const totalAmount = {item.products.price * item.quantity} + deliveryCharge + platformFee;

//   // Handler for changing quantity
//   const handleQuantityChange = (newQuantity) => {
//     if (newQuantity > 0) {
//       setQuantity(newQuantity);
//     }
//   };

//   return (
//     <div className="product-detail">
      
      
//       <div className="product-price">
//       <p className="product-price">
//                     quantity: <strong>${item.quantity }</strong>
//                 </p>
//       <p className="product-price">
//                   Price: <strong>${item.products.price *item.quantity }</strong>
//                 </p>
//         <div className="quantity-control">
         

//         </div>
//       </div>
      
//       <div className="product-charges">
//         <p>Delivery Charge: <strong>${deliveryCharge}</strong></p>
//         <p>Platform Fee: <strong>${platformFee}</strong></p>
//       </div>
      
//       <div className="product-total">
//         <h2>Total Amount: <strong>$({item.products.price * item.quantity} + deliveryCharge + platformFee)</strong></h2>
//       </div>
//     </div>
//   );
// };

// // Sample product data for demonstration
// const sampleProduct = {
//   name: "Sample Product",
//   price: 20 // Price per unit
// };

// const ProductDetailPage = () => {
//   return (
//     <div className="product-detail-page">
//       <ProductDetails product={sampleProduct} />
//     </div>
//   );
// };

// export default ProductDetailPage;
