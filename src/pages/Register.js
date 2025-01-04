import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../redux/Reducers/auth/authSlice";
import { Navigate } from 'react-router-dom';
import { authStart, authSuccess, authFail, logout, register } from "../redux/Reducers/auth/authSlice"
import Swal from 'sweetalert2';
import { addUserToCart } from '../redux/Reducers/cart/CartSlice';

const Register = () => {
    
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthOfDate: '',
    phoneNumber: '',
    password: '',
    role: 'CUSTOMER', // Default role
    avatar: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

//   const handleFileChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       avatar: e.target.files[0],
//     }));
//   };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      
        const productResponse = await dispatch(register(formData)); 

        const response = productResponse;
        
        
        if (response.message === 'success' & response.role==='CUSTOMER') {

            await dispatch(addUserToCart(response.user_id))
            
            
            }

            Swal.fire({
              icon: 'success',
              title: 'Sucess ',
              text: 'please login to continue..',
            });
            // Redirect to the login page
            window.location.href = '/login'; // or use `useNavigate` from react-router-dom
          
    }
        catch (error) {
            console.error("Failed to add User", error);
          }
    // Here, dispatch your register action and include `formData`.
  };


//   if (isAuthenticated) {
//     return <Navigate to="/" />;
//   }

  return (
    <div className="container1">
      <div className="wrapper">
        <form onSubmit={handleRegister}>
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              onChange={handleInputChange}
            />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              onChange={handleInputChange}
            />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleInputChange}
            />
            <i className='bx bxs-envelope'></i>
          </div>
          <div className="input-box">
            <input
              type="date"
              name="birthOfDate"
              required
              onChange={handleInputChange}
            />
            <i className='bx bxs-calendar'></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              required
              onChange={handleInputChange}
            />
            <i className='bx bxs-phone'></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleInputChange}
            />
            <i className='bx bxs-lock'></i>
          </div>
          <div className="input-box">
            <select
              name="role"
              onChange={handleInputChange}
              value={formData.role}
              required
            >
              <option value="ADMIN">ADMIN</option>
              <option value="SELLER">SELLER</option>
              <option value="CUSTOMER">CUSTOMER</option>
            </select>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="avatar"
              placeholder="avatar"
              required
              onChange={handleInputChange}
            />
            <i className='bx bxs-avatar'></i>
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
          <div className="register-link">
            <p>Already signed up? <a href="/login">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
