
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{getProductsStatus, getProductsError,selectAllProducts} from  '../redux/Reducers/postgreProduct/PostgreProductSlice'
import {fetchPostgreProducts} from '../redux/Reducers/postgreProduct/PostgreproductApi'

const Prds=()=>{
    


    return(
        <div style={{display:'flex',paddingLeft:'126px'}}>
        
         <div className="de1"><img src='assets/images/multicar8.jpeg' alt="Image 4"  style={{width:'100%',height:'150px',objectFit:'contain',marginBottom:'10px'}}className="imgs"/>
      <p style={{fontSize:'14px',padding:'5px 0'}}>Printer</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>

      
     <div className="de1"><img src='assets/images/multicar9.jpeg' alt="Image 4"  style={{width:'100%',height:'150px',objectFit:'contain',marginBottom:'10px'}}className="imgs"/>
     <p style={{fontSize:'14px',padding:'5px 0'}}>Printer</p>
   <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
     <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>
    
     <div className="de1"><img src='assets/images/multicar10.jpeg' alt="Image 4"  style={{width:'100%',height:'150px',objectFit:'contain',marginBottom:'10px'}}className="imgs"/>
     <p style={{fontSize:'14px',padding:'5px 0'}}>Printer</p>
     <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
   <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>
      
     <div className="de1"><img src='assets/images/multicar11.jpeg' alt="Image 4"  style={{width:'100%',height:'150px',objectFit:'contain',marginBottom:'10px'}}className="imgs"/>
       <p style={{fontSize:'14px',padding:'5px 0'}}>Printer</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'green'}}>From ₹ 3,000</p>
      <p style={{fontSize:'14px',padding:'5px 0',color:'gray'}}>upto ₹ 9,000</p></div>
       <div><img src='assets/images/ads.avif' alt="Image 1" style={{width:'90%',height:'250px',objectFit:'contain',marginBottom:'10px'}}></img></div>

      
        </div>
    )
}
export default Prds