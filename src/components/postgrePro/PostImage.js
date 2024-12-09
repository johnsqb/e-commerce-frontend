import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';


const PostImage = (props) => {

  const BASE_URL = 'http://localhost:8080';
   
  const  image = props.imageUrl;

  const id =props.pro;

  const filePath = image?.[0]?.filePath || "/default-image-path.jpg";

  const navigate = useNavigate();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const [role, setRole] = useState('');
  // const token = sessionStorage.getItem('jwtToken');

  // useEffect(() => {
  //   if (isAuthenticated && token) {

  //     const decoded = jwtDecode(token);
  //     setRole(decoded.roles);     
  //   }
  // }, [isAuthenticated,token]);


  const handleClick = (id,url) => {


   
        
        navigate(`/postproduct-details/${id}`,{ state: { url } })
        
       
    }
  console.log("hello postimage");
  


  return (
    <>
            <a>
            <img  src={`${BASE_URL}${filePath}`} 
              alt="product-item" style={{width:'100%',height:'160px',objectFit:'contain',marginBottom:'10px',cursor:'pointer'}} className="imgs"  
              onClick={()=>handleClick(id,image)}  />
            </a>


    </>
  )
}

export default PostImage