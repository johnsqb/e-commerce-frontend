import React from 'react'
 import { useEffect,useState } from 'react';
import{getAddressStatus, getAddressError,selectAddress} from  '../../../redux/Reducers/addresses/AddressSlice';
import {fetchAddresses} from '../../../redux/Reducers/addresses/AddressApi'
import { useSelector, useDispatch } from 'react-redux';
import { Box, TextField, Button, MenuItem,Typography} from '@mui/material'; 

const AddressList = () => {

    const dispatch =useDispatch();
    
  const userId=6;
  const addressStatus = useSelector(getAddressStatus)
  console.log(addressStatus);
  
  useEffect(() => {
  

  
      dispatch(fetchAddresses({ userId }));
    },
   []);  // Add addressStatus and dispatch as dependencies


  const userAddress = useSelector((state) => state.address.userAddresses) || { cart: [] };  // Ensure cartItems is an object with a cart array

  // const cart = cartItems || [];  // Ensure cart is an array
  
   console.log(userAddress);

   const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);

  // Handles selecting a radio button and storing the selected address index
  const handleAddressSelect = (index) => {
    setSelectedAddressIndex(index); // Save the index of the address being edited

  }

  const [isAddressExpanded, setIsAddressExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreatingNewAddress, setIsCreatingNewAddress] = useState(false); // New state for creating address


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
  // Save edited address and exit editing mode
//   const updatedAddress = [...address];
//   updatedAddress[selectedAddressIndex] = {
//     ...updatedAddress[selectedAddressIndex],
//     // Add the values from the form fields
//     firstName: newFirstName,  // Assuming you're storing the edited values in a state
//     lastName: newLastName,    // Same for all other fields
//     phoneNumber: newPhoneNumber,
//     addressLine1: newAddressLine1,
//     addressLine2: newAddressLine2,
//     city: newCity,
//     postalCode: newPostalCode,
//   };
//   setAddress(updatedAddress);
  setIsEditing(false); // Exit editing mode
};

  return (
    <div>
        Delivery Address Section
      <div className={`checkout-card ${isAddressExpanded ? "expanded" : ""}`}>
      <div className="header">
        <span className="step-number">2</span>
        <h2>Delivery Address</h2>
      </div>


       <div className={`content ${isAddressExpanded ? "expanded" : ""}`}>
        {isAddressExpanded  ? (
          <>
            {isEditing ? (
              <>
                <p className="edit-header">EDIT ADDRESS</p>
                <Box
                  component="form"
                  sx={{
                    width: '100%', // Adjust width to full container
                    maxWidth: '600px', // Limit the max width to a card size
                    margin: '0 auto', // Center the form horizontally
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)', // Light shadow for card effect
                  }}
                  noValidate
                  autoComplete="off"
                > 
                  {/* Form Title */}
                   <Typography variant="h6" gutterBottom>
                    Delivery Address
                  </Typography> 

                  {/* Title Dropdown (Mr./Mrs.) */}
                   <TextField
                    id="outlined-select-title"
                    select
                    label="Title"
                    value={userAddress[selectedAddressIndex].title}
// /                    helperText="Select your title"
                    sx={{ width: '150px' }}
                    variant="outlined"
                    margin="normal"
                  >
                    <MenuItem value="Mr">Mr.</MenuItem>
                    <MenuItem value="Mrs">Mrs.</MenuItem>
                  </TextField>

                  {/* Name and Phone Number Fields */}
                  
                  <Box sx={{ display: 'flex', gap: '10px' }}>
                    <TextField
                      id="first-name"
                      label="First Name"
                      fullWidth
                      variant="outlined"
                      value={userAddress[selectedAddressIndex].users.firstName}
                      margin="normal"
                    //   onChange={(e) => setNewFirstName(e.target.value)}
                    />
                    <TextField
                      id="last-name"
                      label="Last Name"
                      fullWidth
                      variant="outlined"
                      value={userAddress[selectedAddressIndex].users.lastName}

                      margin="normal"
                    //   onChange={(e) => setNewLastName(e.target.value)}
                    />
                  </Box>

                  <TextField
                    id="phone-number"
                    label="10-digit mobile Number"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={userAddress[selectedAddressIndex].phoneNumber}
                    // onChange={(e) => setNewPhoneNumber(e.target.value)}
                  />

                  {/* Address Fields */}
                   <TextField
                    id="address-line-1"
                    label="Address Line 1"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={userAddress[selectedAddressIndex].addressLine1}
                    
                    // onChange={(e) => setNewAddressLine1(e.target.value)}
                  />
                  <TextField
                    id="address-line-2"
                    label="Address Line 2"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={userAddress[selectedAddressIndex].addressLine2}
                    // onChange={(e) => setNewAddressLine2(e.target.value)}
                  />

                  <Box sx={{ display: 'flex', gap: '10px' }}>
                    <TextField
                      id="city"
                      label="City"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      value={userAddress[selectedAddressIndex].city}
                    //   onChange={(e) => setNewCity(e.target.value)}
                    />
                    <TextField
                      id="postal-code"
                      label="Postal Code"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                      value={userAddress[selectedAddressIndex].postalCode}
                    //   onChange={(e) => setNewPostalCode(e.target.value)}
                    />
                  </Box> 

                  {/* Action Buttons */}
                   <Box
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
                      onClick={handleSave}
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
                     //  onClick={() => console.log('Cancel clicked')}
                       onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box> 

                          </>
            ) : (
              
              <>
                 <div className="address-details">

                    {userAddress.map((add, index) => (
                      <div key={index} className="address-info">
                        <input
                          type="radio"
                          id={`address${index}`}
                          name="address"
                          checked={selectedAddressIndex === index}
                          onChange={() => handleAddressSelect(index)}
                        />
                        <div className="address-content">
                          <div className="name-phone">
                            <label htmlFor={`address${index}`}>
                              <strong>{add.users.firstName} {add.users.lastName}</strong>                              
                              <strong className="phone-number">{add.phoneNumber}</strong>

                            </label>
                            <p>{add.address_line_1}, {add.address_line_2
                            },{add.landmark} ,{add.city} - {add.postalCode}</p>
                          </div>

                          {/* Edit button on the right */}

                          {selectedAddressIndex === index && (
                            <div className="deliver-section">
                              <button className="deliver-here" onClick={handleAddressToggle}>
                                Deliver Here
                              </button>
                            </div>
                        )}
         
          </div>

          {/* Deliver Here button below the address */}
          {selectedAddressIndex === index && (
            <div>
              <button className="edit-button" onClick={handleEditToggle}>
                Edit
              </button>
              </div>
            )}
        </div>
      ))}
    </div>

                



              </>
            )}
          </>
        ) : (
          
          <div className="compact-info">
            <span>
            
              
              <strong> {userAddress[selectedAddressIndex].title}.{userAddress[selectedAddressIndex].users.firstName}   {userAddress[selectedAddressIndex].users.lastName}</strong> - <strong>{userAddress[selectedAddressIndex].phoneNumber}</strong>
                   
            </span>
             <span>{userAddress[selectedAddressIndex].address_line_1},{userAddress[selectedAddressIndex].address_line_2},{userAddress[selectedAddressIndex].landmark}  ,{userAddress[selectedAddressIndex].city}
               -{userAddress[selectedAddressIndex].postalCode}</span>

            <button className="change-button" onClick={handleAddressToggle}>
              Change 
            </button> 
          </div>

          
        )}
      </div>
    </div>


    </div>
  )
}

export default AddressList