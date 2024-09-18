import React, { useState,useEffect } from "react";
import { Box, TextField, Button, MenuItem,Typography} from '@mui/material'; 
import{getAddressStatus, getAddressError,selectAddress} from  '../redux/Reducers/addresses/AddressSlice';
import {fetchAddresses} from '../redux/Reducers/addresses/AddressApi';
import { useSelector, useDispatch } from 'react-redux';

import AddIcon from '@mui/icons-material/Add';
import Login from "../components/checkout/Login";
import AddressList from "../components/checkout/address/AddressList";
import OrderSummary from "../components/checkout/OrderSummary";
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
  

  const dispatch =useDispatch();
    
  const userId=5;
  const addressStatus = useSelector(getAddressStatus)
  console.log(addressStatus);
  
  useEffect(() => {
  

  
      dispatch(fetchAddresses({ userId }));
    },
   [ ]);  // Add addressStatus and dispatch as dependencies


  const userAddress = useSelector((state) => state.address.userAddresses) || { cart: [] };  // Ensure cartItems is an object with a cart array

  // const cart = cartItems || [];  // Ensure cart is an array
  
   console.log(userAddress);

   


  const [address,setAddress]  = useState([
    {
    title:'Mr',
    firstName:'Johns',
    lastName:'George C',
    phoneNumber:'9446462470',
    addressLine1:'Chakkath house Aloor p o ',
    addressLine2:'Near RMHS School Aloor',
    city:'Aloor',
    postalCode:'680683'
  },
  {
    title:'Mr',
    firstName:'Philips',
    lastName:'George C',
    phoneNumber:'9632231539',
    addressLine1:'Chakkath house Aloor p o ',
    addressLine2:'Near RMHS School Aloor',
    city:'Aloor',
    postalCode:'680683'
  }

])
 
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



  // const [originalTitle, setOriginalTitle] = useState(''); // Default original name
  const[title,setTitle] = useState('');

  // const [originalFirstName, setOriginalFirstName] = useState('Johns'); // Default original name
  const [newFirstName, setNewFirstName] = useState('');

  // const [originalLastName, setOriginalLastName] = useState('George'); // Default original name
  const [newLastName, setNewLastName] = useState('');

  // const [originalPhoneNumber, setOriginalPhoneNumber] = useState('9446462470'); // Default original name
  const[newPhoneNumber,setNewPhoneNumber] = useState('');
  
  // const [originalAddressLine1, setOriginalAddressLine1] = useState('Chakkath house'); // Default original name
  const[newAddressLine1,setNewAddressLine1] = useState('');
 
  // const [originalAddressLine2, setOriginalAddressLine2] = useState('Aloor po near RMHSS School'); // Default original name
  const[newAddressLine2,setNewAddressLine2] = useState('');

  // const [originalCity, setOriginalCity] = useState('Aloor'); // Default original name
  const[newCity,setNewCity] = useState('');

  // const [originalPostalCode, setOriginalPostalCode] = useState('680683'); // Default original name
  const [newPostalCode,setNewPostalCode]= useState('')



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
    // Save edited address and exit editing mode
    const updatedAddress = [...address];
    updatedAddress[selectedAddressIndex] = {
      ...updatedAddress[selectedAddressIndex],
      // Add the values from the form fields
      firstName: newFirstName,  // Assuming you're storing the edited values in a state
      lastName: newLastName,    // Same for all other fields
      phoneNumber: newPhoneNumber,
      addressLine1: newAddressLine1,
      addressLine2: newAddressLine2,
      city: newCity,
      postalCode: newPostalCode,
    };
    setAddress(updatedAddress);
    setIsEditing(false); // Exit editing mode
  };

   


  return (
    <div className="checkout-container">
    <div className="checkout-page">
    {/* Login Section */}

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



      {/* <AddressList/> */}
    

    {/* <div className="checkout-container">
  {isAddressExpanded && (
    <div className={`checkout-card expanded`}>
      <div className="header">
        <div className="step-number"><AddIcon /></div>
        <a href="#" onClick={handleCreateNewAddressToggle} >
          Add a new address
        </a>
      </div>

      <div className={`content ${isAddressExpanded ? "expanded" : ""}`}>
        <div className="content">
          { isCreatingNewAddress && (
            <>
              <p className="edit-header">Add address</p> */}

              {/* Address Form */}
              {/* <Box
                component="form"
                sx={{
                  width: '100%',
                  maxWidth: '600px',
                  margin: '0 auto',
                  padding: '20px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                }}
                noValidate
                autoComplete="off"
              > */}
                {/* Title Dropdown (Mr./Mrs.) */}
                {/* <TextField
                  id="outlined-select-title"
                  select
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  helperText="Select your title"
                  sx={{ width: '150px' }}
                  variant="outlined"
                  margin="normal"
                >
                  <MenuItem value="Mr">Mr.</MenuItem>
                  <MenuItem value="Mrs">Mrs.</MenuItem>
                </TextField> */}

                {/* Name and Phone Number Fields */}
                {/* <Box sx={{ display: 'flex', gap: '10px' }}>
                  <TextField
                    id="first-name"
                    label="First Name"
                    fullWidth
                    variant="outlined"
                    value={firstName}
                    margin="normal"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <TextField
                    id="last-name"
                    label="Last Name"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Box>

                <TextField
                  id="phone-number"
                  label="10-digit mobile Number"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                /> */}

                {/* Address Fields */}
                {/* <TextField
                  id="address-line-1"
                  label="Address Line 1"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                />
                <TextField
                  id="address-line-2"
                  label="Address Line 2"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={addressLine2}
                  onChange={(e) => setAddressLine2(e.target.value)}
                />

                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <TextField
                    id="city"
                    label="City"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <TextField
                    id="postal-code"
                    label="Postal Code"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </Box> */}

                {/* Action Buttons */}
                {/* <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: 'orange',
                      color: 'white',
                      padding: '10px 20px',
                      fontSize: '16px',
                      flex: '1',
                    }}
                    onClick={handleedit}
                  >
                    Save & Deliver Here
                  </Button>
                  <Button
                    variant="text"
                    style={{
                      color: 'gray',
                      marginLeft: '10px',
                      padding: '10px 20px',
                      fontSize: '16px',
                    }}
                    onClick={handlNewAddressCancel}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </div>
      </div>
    </div>
  )}
</div> */}


    
    
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
      <OrderSummary/>




      {/* Payment Options Section */}
      <div className="checkout-card">
        <div className="header">
          <span className="step-number">4</span>
          <h2>Payment Options</h2>
        </div>
        <div className="content">
          <input type="radio" name="payment" /> Credit/Debit Card
          <input type="radio" name="payment" /> UPI
        </div>
      </div>
    </div>
  </div>
  );
};

export default CheckoutPage;
