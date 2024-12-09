import { Favorite, FiberManualRecordOutlined, FiberManualRecordRounded } from '@mui/icons-material'
import React, { useState } from 'react'
import "./Card.css";
import { useEffect } from 'react';
import { effectInit } from 'swiper/effect-utils';
import { cleanup } from '@testing-library/react';
import { Carousel } from 'bootstrap';
import { useCallback } from 'react';
const Card = ({offerPrice,image,name,rating,actualPrice}) => {
  const[index,setIndex]=useState(0);
  const[show,setshow]=useState(false);
  const carousel= useCallback(()=>{
    setTimeout(() => {
      if(index<image.length-1){
       setIndex(index+1);
      }
      else{
       setIndex(0);
      }
   }, 1000);
   },[index,image.length]);
  useEffect(()=>{
    show && carousel()
  },[show,carousel])

  const array=[0,1,2]
  return (
    
    
    <div className='cards'>
    <div className='card'>
        <div className='card__heart'>
           <Favorite/>
        </div>
        {/* {
          Array(image.length).fill().map((_,i)=>{
            if(i === index){
              return show && <FiberManualRecordRounded className='dots'/>
            }
            else{
              return <FiberManualRecordOutlined className='dots'/>
            }
          })
        } */}

        <div className='card__image'>
            <img onMouseOver={()=>setshow(true)} onMouseLeave={()=>setshow(false)} src={image[index]} alt="images"/>
            
            </div>
            <div className='PrdDet'>

            

            <div className='card__details'>
            <p className='title'>adidas</p>
            <p>running shoes</p>
            <span className='span1'>₹{offerPrice}</span>
            <span className='span2'>₹{actualPrice}</span>
            <span className='span3'>56%</span>
            </div>
            <div className='card__size'>
            <p>size <span className='span4'>6,7,8,9</span></p>
            </div>
            </div>
    </div>
    </div>
    
  )
}

export default Card
