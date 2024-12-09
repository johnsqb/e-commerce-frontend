import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import components
import { React, useEffect } from 'react';
import CartImage from '../components/cart/CartImage';
import CartProductDetails from '../components/cart/CartProductDetails';
import RemoveFromCart from '../components/cart/RemoveFromCart';
import Slide from '../components/slide';
import { fetchPostCartItems } from '../redux/Reducers/cart/postCartSlice';

const Cart = () => {
  const cartId = sessionStorage.getItem('CartId');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostCartItems({ cartId }));
  }, [dispatch, cartId]);

  const cartItems = useSelector((state) => state.postCart.postCartItems) || { cart: [] };
  const cart = cartItems || [];
  
  // Calculate total amount
  const totalAmount = cartItems.length > 0 && cartItems[0].cart ? cartItems[0].cart.total : "0";

  return (
    <>
      <Slide />
      <div style={{ margin: "30px" }}>
        <h2>Cart</h2>
        {cart.length > 0 ? (
          <>
            <Swiper
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper"
              spaceBetween={30}
              slidesPerView={4}
            >
              {cart.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="swiper-slide">
                    <div className="product-card position-relative">
                      <div key={product.id} className="dep">
                        <CartImage pro={product.products} />
                        <CartProductDetails
                          productName={product.products?.name || "Unknown Product"}
                          price={product.products?.price}
                          pro={product.products?.id}
                          quantity={product.quantity}
                        />
                        <RemoveFromCart product={product.id} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <h2>Total Amount: {totalAmount}</h2>
            <a href="/checkout" className="btncar">Check Out</a>
          </>
        ) : (
          <p>No products in the cart</p>
        )}
      </div>
    </>
  );
};

export default Cart;
