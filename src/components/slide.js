import React,{ useEffect,Component } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getCategory} from '../redux/Reducers/categories/CategoryApi';
import StatusCode from "../redux/utils/StatusCode";


function Slide(){


  const categoryImages = {
    Watch:"/assets/images/pexels-anthony-derosa-39577-236915.jpg",
    Grocery: "/assets/images/OIP (14).jpeg",
    mobile: "/assets/images/phones.png",
    Electronics: "/assets/images/laptop.jpg",
    Furnitures: "/assets/images/furniture.png",
    Appliances: "/assets/images/appliances.jpg",
    Fashion:"/assets/images/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing-happy-cheerful-couple-sunglasses.jpg",
    Beauty:"/assets/images/cute-5157056_1280.jpg",
    Kitchen:"/assets/images/pexels-zvolskiy-2062426.jpg",
    Travel:"/assets/images/pexels-freestockpro-1008155.jpg",
    Mobiles:"/assets/images/NicePng_smartphones-png_2370146.png"
  };
  const dispatch = useDispatch();

    const {categories,status } = useSelector(state => state.category);
    // console.log();
    // const id =props.parentId;

    // const filteredProducts = products.filter(product => (product.parentCategory.id===id));

    console.log(categories);
    
    
    useEffect(()=>{

       dispatch(getCategory());
        
  
 },[dispatch]);



  if(status===StatusCode.LOADING){
    return <p>Loading...</p>
  }
  if(status===StatusCode.ERROR){
     
      return < p> Something went wrong..try again</p>
       
      }



 

   const cat = categories.map((category)=>(

    <>


    <div className="circle1"> <img  src={categoryImages[category.name]} 
        alt={category.categoryName} 
        value={category.categoryName} /><span>{category.name
    }</span></div>
      
      
    </>

  ));
return(
 <div>
    <div className="sl">

 
      {cat}
       {/* <div className="circle1"> <img src="assets/images/OIP (14).jpeg" alt="" value="hbdc"/><span></span></div>
      
      <div className="circle1"> <img src="assets/images/phones.png" alt="" value="hbdc"/><span>Mobile</span></div>
      <div className="circle2"> <img src="assets/images/laptop.jpg" alt="" value="hbdc"/><span>Electronics</span></div>
      <div className="circle3"> <img src="assets/images/furniture.png" alt="" value="hbdc"/><span>Furnitures</span></div>
      <div className="circle4"> <img src="assets/images/appliances.jpg" alt="" value="hbdc"/><span>Appliances</span></div> */}
      {/* <div className="circle1"> <img src="assets/images/phones.png" alt="" value="hbdc"/></div>
      <div className="circle1"> <img src="assets/images/phones.png" alt="" value="hbdc"/></div>
      <div className="circle1"> <img src="assets/images/phones.png" alt="" value="hbdc"/></div>
      <div className="circle1"> <img src="assets/images/phones.png" alt="" value="hbdc"/></div>
      <div className="circle1"> <img src="assets/images/phones.png" alt="" value="hbdc"/></div> */}
     
    </div>
 </div>
);
};
export default Slide