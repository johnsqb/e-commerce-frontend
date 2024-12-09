import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import Slider from "react-slick"
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { getProductsStatus, selectAllProducts } from '../redux/Reducers/postgreProduct/PostgreProductSlice'
import { fetchPostgreProducts } from '../redux/Reducers/postgreProduct/PostgreproductApi'
import PostImage from "./postgrePro/PostImage"
import PostProductDetails from "./postgrePro/PostProductDetails"


const PreviousBtn=(props)=>{
  console.log(props);
  const {className,onClick} =props
return(

  <div className={className} onClick={onClick}>
    <ArrowBackIos style={{color:"blue",fontSize:'30px'}}></ArrowBackIos>
  </div>

)
} 

const Nextbtn=(props)=>{
  const {className,onClick} =props
  return(
    <div className={className} onClick={onClick}>
    <ArrowForwardIos style={{color:"blue",fontSize:'30px'}}></ArrowForwardIos>
    </div>
  )
  } 
  
const MultiCarousell = () => {


  const dispatch =useDispatch();
    
  const productStatus = useSelector(getProductsStatus)

  useEffect(() => {

    if (productStatus === 'idle') {
      dispatch(fetchPostgreProducts());
    }
  }, [productStatus ,dispatch]);

 
                  
  const products =  useSelector(selectAllProducts);

  console.log(products);

  const cards = products.map((product,index)=>{

    
    return (
      <div key={product.id} className="de">
        <PostImage imageUrl={product.image} pro={product.id} />
        <PostProductDetails productName={product.name} price={product.price} pro={product.id} />
      </div>
    );
  }
  )
  
  return (
    <>
    
    <div style={{margin:"30px"}}>
      <div><h5>Top Offers</h5></div><br></br>
          <Slider prevArrow={<PreviousBtn/>} nextArrow={<Nextbtn/>} slidesToShow={5} slidesToScroll={3} infinite={false}>
        
        {cards}
      

      
      
      </Slider>
    </div>
    </>
  )
}

export default MultiCarousell
