import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';


const PostImage = (props) => {

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


  const handleClick = (pro,url) => {


   
        
        navigate(`/postproduct-details/${pro}`,{ state: { url } })
        
       
    }
  console.log("hello postimage");
  


  return (
    <>
            <a>
            <img  src={props.imageUrl}
              alt="product-item" style={{width:'100%',height:'160px',objectFit:'contain',marginBottom:'10px',cursor:'pointer'}} className="imgs"  
              onClick={()=>handleClick(props.pro,props.imageUrl)}  />
            </a>


    </>
  )
}

export default PostImage