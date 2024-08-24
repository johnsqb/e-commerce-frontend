import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import {getProducts} from '../redux/Reducers/product/ProductApi';
import StatusCode from '../redux/utils/StatusCode';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

//import components
import ProductDetails from './products/ProductDetails';
import Image from './products/Image';
import AddToCart from './products/AddToCart';



const SliderMob = (props) => {
  const dispatch = useDispatch();

    const {data:products,status } = useSelector(state => state.product);
    console.log(products);
    const id =props.parentId;
    console.log(id);
    
    const filteredProducts = products.filter(product => (product.parentCategory.id===id));

    
    useEffect(()=>{

       dispatch(getProducts());
        
        // fetch('https://fakestoreapi.com/products')
        // .then(data => data.json()) 
        // .then(result=>setProducts(result))
 },[dispatch]);



  if(status===StatusCode.LOADING){
    return <p>Loading...</p>
  }
  if(status===StatusCode.ERROR){
     
      return < p> Something went wrong..try again</p>
       
      }



  //   const addtocart = (product)=>{

  //     dispatch(add(product))

       

  //  };

   const card = filteredProducts.map((product)=>(

    <>

    <SwiperSlide>
        <div className="swiper-slide">
            <div className="product-card position-relative"> 
                
              <Image imageUrl={product.images} pro={product.id} />
              {/* imageUrl={product.imageUrl} pro={product.id} */}
                  
              <AddToCart product={product}/>
                  
              <ProductDetails productName={product.productName} price={product.sellingPrice} pro={product.id}/>
                  
            </div>
        </div>
    </SwiperSlide>
   
   </>

   ))
  return (
    <div>

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

export default SliderMob