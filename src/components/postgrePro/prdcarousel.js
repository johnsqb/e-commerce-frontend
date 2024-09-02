import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{getProductsStatus, getProductsError,selectAllProducts} from  '../redux/Reducers/postgreProduct/PostgreProductSlice';
import {fetchPostgreProducts} from '../redux/Reducers/postgreProduct/PostgreproductApi';
import PostImage from "./postgrePro/PostImage";
import PostProductDetails from "./postgrePro/PostProductDetails";


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

  const images=[
                  'assets/images/multicar.png',
                  'assets/images/multicar0.jpeg',
                  'assets/images/multicar3.jpeg',
                  'assets/images/multicar4.jpeg',
                  'assets/images/multicar8.jpeg',
                  'assets/images/multicar5.jpeg',
                  'assets/images/multicar6.jpeg',
                  'assets/images/multicar7.jpeg',
                  'assets/images/multicar8.jpeg',
                  'assets/images/multicar9.jpeg',
                  'assets/images/multicar10.jpeg',
                  'assets/images/multicar11.jpeg'

                  

  ]
  const products =  useSelector(selectAllProducts);

  console.log(products);

  const cards = products.map((product,index)=>{

    console.log(product);
    
    return (
      <div key={product.id} className="de">
        <PostImage imageUrl={images[index % images.length]} pro={product.id} />
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
      
{/*
      <div className="de"><img src='assets/images/printers.jpeg' alt="Image 1" style={{width:'100%',height:'160px',objectFit:'contain',marginBottom:'10px'}} className="imgs" />
      <p style={{fontSize:'14px',padding:'5px 0'}}>Printer</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>

 
      <div className="de"><img src='assets/images/multicar.jpeg' alt="Image 2"  style={{width:'100%',height:'150px',objectFit:'contain',marginBottom:'10px'}}className="imgs"/>
      <p style={{fontSize:'14px',padding:'5px 0'}}>Mouse</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>

      <div className="de"><img src='assets/images/multicar1.jpeg' alt="Image 3"  style={{width:'100%',height:'150px',objectFit:'contain',marginBottom:'10px'}}className="imgs"/>
      <p style={{fontSize:'14px',padding:'5px 0'}}>Color Printer</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>

      <div className="de"><img src='assets/images/multicar3.jpeg' alt="Image 4"  style={{width:'100%',height:'150px',objectFit:'contain',marginBottom:'10px'}}className="imgs"/>
      <p style={{fontSize:'14px',padding:'5px 0'}}>Phone</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>

      <div className="de"><img src='assets/images/multicar4.jpeg' alt="Image 4"  style={{width:'100%',height:'150px',objectFit:'contain',marginBottom:'10px'}}className="imgs"/>
      <p style={{fontSize:'14px',padding:'5px 0'}}>Laptops</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>

      <div className="de"><img src='assets/images/multicar5.jpeg' alt="Image 4"  style={{width:'100%',height:'150px',objectFit:'contain',marginBottom:'10px'}}className="imgs"/>
      <p style={{fontSize:'14px',padding:'5px 0'}}>M12</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>

      <div className="de"><img src='assets/images/multicar6.jpeg' alt="Image 4"  style={{width:'100%',height:'150px',objectFit:'contain',marginBottom:'10px'}}className="imgs"/>
      <p style={{fontSize:'14px',padding:'5px 0'}}>Boat Headset</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>

      <div className="de"><img src='assets/images/multicar7.jpeg' alt="Image 4"  style={{width:'100%',height:'150px',objectFit:'contain',marginBottom:'10px'}}className="imgs"/>
      <p style={{fontSize:'14px',padding:'5px 0'}}>Camera</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>

      <div className="de"><img src='assets/images/multicar8.jpeg' alt="Image 4"  style={{width:'100%',height:'150px',objectFit:'contain',marginBottom:'10px'}}className="imgs"/>
      <p style={{fontSize:'14px',padding:'5px 0'}}>Watches</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>

      <div className="de"><img src='assets/images/multicar9.jpeg' alt="Image 4"  style={{width:'100%',height:'150px',objectFit:'contain',marginBottom:'10px'}}className="imgs"/>
      <p style={{fontSize:'14px',padding:'5px 0'}}>Shoes</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>

      <div className="de"><img src='assets/images/multicar10.jpeg' alt="Image 4"  style={{width:'100%',height:'150px',objectFit:'contain',marginBottom:'10px'}}className="imgs"/>
      <p style={{fontSize:'14px',padding:'5px 0'}}>Nike shoes</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>
      
      <div className="de"><img src='assets/images/multicar11.jpeg' alt="Image 4"  style={{width:'100%',height:'150px',objectFit:'contain',marginBottom:'10px'}}className="imgs"/>
      <p style={{fontSize:'14px',padding:'5px 0'}}>Puma Shoes</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>
       */}
      
      
      </Slider>
    </div>
    </>
  )
}

export default MultiCarousell
