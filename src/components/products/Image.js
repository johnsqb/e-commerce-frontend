import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';


const Image = (props) => {

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


  const handleClick = (pro) => {


   
        
        navigate(`/product-details/${pro}`)
        
       
    }
  


  return (
    <div>

        <div className="image-holder">
            <a onClick={()=>handleClick(props.pro)}>
            <img  src={props.imageUrl[1].imageUrl} alt="product-item" className="img-fluid" />
            </a>
        </div>


    </div>
  )
}

export default Image