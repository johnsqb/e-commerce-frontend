import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import components
import CartImage from '../components/cart/CartImage';
import RemoveFromCart from '../components/cart/RemoveFromCart';
import CartProductDetails from '../components/cart/CartProductDetails';
import { useEffect } from 'react';
import { fetchCartItems } from '../redux/Reducers/cart/cartSlice';
import { fetchPostCartItems } from '../redux/Reducers/cart/postCartSlice';
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import Slider from "react-slick"
import Slide from '../components/slide';




// const PreviousBtn=(props)=>{
//   console.log(props);
//   const {className,onClick} =props
// return(
//   <div className={className} onClick={onClick}>
//     <ArrowBackIos style={{color:"blue",fontSize:'30px'}}></ArrowBackIos>
//   </div>
// )
// } 
// const Nextbtn=(props)=>{
//   const {className,onClick} =props
//   return(
//     <div className={className} onClick={onClick}>
//     <ArrowForwardIos style={{color:"blue",fontSize:'30px'}}></ArrowForwardIos>
//     </div>
//   )
//   } 

const Cart = () => {

  const cartId  = sessionStorage.getItem('CartId');
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostCartItems({cartId}));
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchCartItems());
  // }, [dispatch]);

  const cartItems = useSelector((state) => state.postCart.postCartItems) || { cart: [] };  // Ensure cartItems is an object with a cart array

  const cart = cartItems || [];  // Ensure cart is an array
  
   console.log(cartItems);

   const totalAmount = cartItems.length > 0 && cartItems[0].cart ? cartItems[0].cart.total : "0";

  const card = cart.length ? (
    cart.map((product) => (
      // <SwiperSlide key={product.id}>  {/* Add a key to each SwiperSlide */}
      //   <div className="swiper-slide">
      //     <div className="product-card position-relative">
      <div key={product.id} className="dep">
            
             {/* <CartImage imageUrl={product.product.images} pro={product.product.id} /> */}
            
            <CartImage/>

            <CartProductDetails productName={product.products.name} price={product.products.price} pro={product.products.id} quantity={product.quantity} />
            
            <RemoveFromCart product={product.id} />


          </div>
        
      
    ))
  ) : (
    <p>No products in the cart</p>
  );

  return (
   <>
    <Slide/>
   
   <div style={{margin:"30px"}}>
    <h2>Carts</h2>
        {/* <Slider prevArrow={<PreviousBtn/>} nextArrow={<Nextbtn/>} slidesToShow={5} slidesToScroll={3} infinite={false}> */}
      
      {card}
    
      {/* <Swiper
        pagination={{ clickable: true }}
        navigation={true} 
        modules={[Navigation, Pagination]}  
        className="mySwiper"  
        spaceBetween={30}
        slidesPerView={4}
      >
        {card}
      </Swiper> */}

     
      {/* </Slider> */}
  
       <h2>Total Amount :{totalAmount}</h2> 
      
       <a href="/checkout" className="btncar" > Check Out </a> 


    </div>
    </>
  );
};

export default Cart;
