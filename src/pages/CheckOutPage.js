import React, { useState,useEffect } from "react";
import { Box, TextField, Button, MenuItem,Typography} from '@mui/material'; 
import{getAddressStatus, getAddressError,selectAddress} from  '../redux/Reducers/addresses/AddressSlice';
import {fetchAddresses} from '../redux/Reducers/addresses/AddressApi';
import { useSelector, useDispatch } from 'react-redux';

import AddIcon from '@mui/icons-material/Add';
import Login from "../components/checkout/Login";
import AddressList from "../components/checkout/address/AddressList";
import OrderSummary from "../components/checkout/OrderSummary";
import PaymentPage from "../components/checkout/paymentMethod/PaymentPage";
import PaymentOptions from "../components/checkout/paymentMethod/PaymentOptions";

// import {
//   MDBRow,
//   MDBCol,
//   MDBInput,
//   MDBCheckbox,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { MDBSelect } from 'mdb-react-ui-kit';

// import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';




const CheckoutPage = () => {

  console.log("checkout page");
  

  
 
const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);

  // Handles selecting a radio button and storing the selected address index
  const handleAddressSelect = (index) => {
    setSelectedAddressIndex(index); // Save the index of the address being edited

  }
  // {console.log(userAddress[selectedAddressIndex].id);
  // }
    
    // Pre-fill the form fields with the current address values
    // setNewFirstName(selectedAddress.firstName);
    // setNewLastName(selectedAddress.lastName);
    // setNewPhoneNumber(selectedAddress.phoneNumber);
    // setNewAddressLine1(selectedAddress.addressLine1);
    // setNewAddressLine2(selectedAddress.addressLine2);
    // setNewCity(selectedAddress.city);
    // setNewPostalCode(selectedAddress.postalCode);  };


  const [isLoginExpanded, setIsLoginExpanded] = useState(false);
  const [isAddressExpanded, setIsAddressExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreatingNewAddress, setIsCreatingNewAddress] = useState(false); // New state for creating address





  const handleLoginToggle = () => setIsLoginExpanded(!isLoginExpanded);
  const handleAddressToggle = () => setIsAddressExpanded(!isAddressExpanded);
  const handleEditToggle = () => setIsEditing(!isEditing);
  const handleCreateNewAddressToggle = () =>{
     setIsCreatingNewAddress(!isCreatingNewAddress); // Toggle the create new address form
     if (isEditing) {
      setIsEditing(false);
    }
 
  }

  const handleCancel = () => {
   
    handleEditToggle();
  };

  const handlNewAddressCancel=() => {

      handleCreateNewAddressToggle();

  }

  const handleSave = () => {
    // // Save edited address and exit editing mode
    // const updatedAddress = [...address];
    // updatedAddress[selectedAddressIndex] = {
    //   ...updatedAddress[selectedAddressIndex],
    //   // Add the values from the form fields
    //   firstName: newFirstName,  // Assuming you're storing the edited values in a state
    //   lastName: newLastName,    // Same for all other fields
    //   phoneNumber: newPhoneNumber,
    //   addressLine1: newAddressLine1,
    //   addressLine2: newAddressLine2,
    //   city: newCity,
    //   postalCode: newPostalCode,
    // };
    // setAddress(updatedAddress);
    setIsEditing(false); // Exit editing mode
  };

   


  return (
    <div className="checkout-container">
    <div className="checkout-page">
    {/* Login Section */}



    <AddressList/>
    
    <OrderSummary/>




      {/* Payment Options Section */}
      <div>
      <PaymentOptions/>
      </div>
      {/* <div className="checkout-card">
        <div className="header">
          <span className="step-number">4</span>
          <h2>Payment Options</h2>
        </div>
        <div className="content">
          <input type="radio" name="payment" /> Credit/Debit Card
          <input type="radio" name="payment" /> UPI
        </div>
      </div> */}
    </div>
  </div>
  );
};

export default CheckoutPage;
