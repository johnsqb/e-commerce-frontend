import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Login from "../components/checkout/Login";
import ProductDetails from "../components/checkout/ProductDetails";
import PaymentOptions from "../components/checkout/paymentMethod/PaymentOptions";
import OrderSummary from '../components/checkout/OrderSummary';
import { fetchAddresses } from '../redux/Reducers/addresses/AddressApi';
import { getAddressStatus, selectAddress } from '../redux/Reducers/addresses/AddressSlice';

// import {
//   MDBRow,npm start
//   MDBCol,
//   MDBInput,
//   MDBCheckbox,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { MDBSelect } from 'mdb-react-ui-kit';

// import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';




const CheckoutPage = () => {

  console.log("checkout page");
  
  const [formData, setFormData] = useState({});


  
 
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
    // setFirstName(originalFirstName);
    
    // setLastName(originalLastName); // Revert changes to original value

    // setAddressLine1(originalAddressLine1); // Revert changes to original value
    
    // setAddressLine2(originalAddressLine2); // Revert changes to original value
   
    // setPhoneNumber(originalPhoneNumber); // Revert changes to original value
    
    // setCity(originalCity); // Revert changes to original value
   
    // setPostalCode(originalPostalCode); // Revert changes to original value
    // Revert changes to original value
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

    <div className="left-section" style={{ width: '65%', paddingRight: '20px' }}>
    <Login/>
    {/* <div className={`checkout-card ${isLoginExpanded ? "expanded" : ""}`}>
      <div className="header">
        <div className="step-number">1</div>
        <h2>LOGIN</h2>
      </div>
      <div className={`content ${isLoginExpanded ? "expanded" : ""}`}>
        {isLoginExpanded ? (
          <>
            <p>Name: Johns George C</p>
            <p>Phone: 9446462470</p>
            <br/>
            <a href="#" className="logout-link" onClick={() => alert('Logged out!')}>
              Logout & login to another account
            </a><br/>
            <button className="continue" onClick={handleLoginToggle}>
              Continue Checkout
            </button>
          </>
        ) : (
          <div className="compact-info">
            <span>Johns George C</span>
            <span>9446462470</span>
            <button className="change-button" onClick={handleLoginToggle}>
              Change
            </button>
          </div>
        )}
      </div>
    </div> */}




    <AddressList/>
    



    
    
      {/* Order Summary Section */}
      {/* <div className="checkout-card">
        <div className="header">
          <span className="step-number">3</span>
          <h2>Order Summary</h2>
        </div>
        <div className="content">
          {/* Map your cart items here */}
         {/* <p>Product 1: $100</p>
          <p>Product 2: $50</p>
        </div>
      </div> */}
       {/* <AddressList
          address={address}
          selectedAddressIndex={selectedAddressIndex}
          onAddressSelect={handleAddressSelect}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          isCreatingNewAddress={isCreatingNewAddress}
          setIsCreatingNewAddress={setIsCreatingNewAddress}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSave={handleSave}
          handleCancel={handleCancel}
          handlNewAddressCancel={handlNewAddressCancel}
        /> */}

      <OrderSummary/>
     



      {/* Payment Options Section */}
    
        <div >
        
       <PaymentOptions/>
       </div>
      </div>
      </div>
  </div>
  );

};

export default CheckoutPage;
