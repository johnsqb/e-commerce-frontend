
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch ,useSelector} from 'react-redux';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

//import components

import CartImage from '../components/cart/CartImage'
import RemoveFromCart from '../components/cart/RemoveFromCart'
import CartProductDetails from '../components/cart/CartProductDetails'


const Cart = () => {
  
    const productsincart = useSelector(state=> state.cart)

     console.log(productsincart);

    const card = productsincart.map((product)=>(

        <>
    
        <SwiperSlide>
            <div className="swiper-slide">
                <div className="product-card position-relative"> 
                    
                  <CartImage imageUrl={product.images} pro={product.id} />
                  {/* imageUrl={product.imageUrl} pro={product.id} */}
                      
                  <RemoveFromCart product={product}/>
                      
                  <CartProductDetails productName={product.productName} price={product.sellingPrice} pro={product.id}/>
                      
                </div>
            </div>
        </SwiperSlide>
       
       </>
    
       ))
      return (
        <div>
    <h2>Carts</h2>
    <Swiper
        
        pagination={{clickable:true}}
        navigation={true} modules={[Navigation,Pagination]}  className="mySwiper"  
        spaceBetween={30}
        slidesPerView={4}
           
        >
          
            {card}
    
                  
       </Swiper>
    
    
        </div>
      );
    };

 
export default Cart;