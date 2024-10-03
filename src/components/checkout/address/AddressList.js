import React from 'react'
 import { useEffect,useState } from 'react';
import {fetchAddresses} from '../../../redux/Reducers/addresses/AddressApi'
import { useSelector, useDispatch } from 'react-redux';
import { Box, TextField, Button, MenuItem,Typography} from '@mui/material'; 
import StatusCode from '../../../redux/utils/StatusCode';
import EditAddress from './EditAddress';
import AddIcon from '@mui/icons-material/Add';
import { addNewAddress } from '../../../redux/Reducers/addresses/AddAddressApi';


const AddressList = () => {

    const dispatch =useDispatch();
    
  const userId=sessionStorage.getItem('Id')

  
  console.log(userId);
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [landmark, setLandmark] = useState('');
  const [title, setTitle] = useState('');

  // Add addressStatus and dispatch as dependencies


    
  // const cart = cartItems || [];  // Ensure cart is an array
  const { userAddresses = [], status } = useSelector((state) => state.address || {}); // Use default empty array for userAddress
  const [formid, setFormid] = useState('');

  useEffect(() => {
    
    console.log("inside useEffect "+ userId);
    
    if (status !== StatusCode.SUCCESS && userAddresses.length === 0) {
      dispatch(fetchAddresses({ userId }));
    }

    }, [dispatch, userId,userAddresses]);

  
    
  console.log("userAddress"+ userAddresses);
  console.log("hi all"+ userAddresses);

      

  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);

  // Handles selecting a radio button and storing the selected address index
  const handleAddressSelect = (index) => {
   
    setSelectedAddressIndex(index); // Save the index of the address being edited

  }


  const [isAddressExpanded, setIsAddressExpanded] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [isCreatingNewAddress, setIsCreatingNewAddress] = useState(false); // New state for creating address



  const handleEditToggle = () => setIsEditing(!isEditing);


  


  const handleAddressToggle = () => {
    setIsAddressExpanded(!isAddressExpanded);
    setIsCreatingNewAddress(false); // Ensure add address form is not toggled here
};


const handleCreateNewAddressToggle = () => {
    setIsCreatingNewAddress(!isCreatingNewAddress);
    setIsAddressExpanded(true); // Ensure address section is expanded when adding a new address
    if (isEditing) {
        setIsEditing(false);
    }
};

  const handleCancel = () => {
    
    handleEditToggle();
  
  };

  const handleCancelAddress = () => {
    
    setIsAddressExpanded(true); // Keeps the address section open but closes the form
    setIsCreatingNewAddress(false);
  
  };


  
  const handlNewAddressCancel=() => {
    handleCreateNewAddressToggle();
}



  const handleSave = async () => {
    const newAddress = { address_line_1:address1, address_line_2:address2, city, landmark, postalCode, phoneNumber, title };
    try {

      await dispatch(addNewAddress({ id: userId, newAddress }));

      dispatch(fetchAddresses({userId}));

      handleCancelAddress();
       // Close the form after saving

    } catch (error) {
      console.error("Failed to update address:", error);
    }
  };


const editData = (id,phoneNumber,address1,address2,landmark,city,postalCode,title) => {
  const data = {
    id : id,
    phoneNumber : phoneNumber,
    address1 : address1,
    address2:address2,
    landmark:landmark,
    city:city,
    title:title,
    postalCode:postalCode
  };
  setFormid(data);
  handleEditToggle();   
};


if(status===StatusCode.LOADING){
  return <p>Loading...</p>
}

if(status===StatusCode.ERROR){
   
    return < p> Something went wrong..try again</p>
     
  }

  return (

    <div>
      <div className={`checkout-card ${isAddressExpanded ? "expanded" : ""}`}>
      <div className="header">
        <span className="step-number">2</span>
        <h2>Delivery Address</h2>
      </div>

      <div className={`content ${isAddressExpanded ? "expanded" : ""}`}>
  {isAddressExpanded ? (
    <>
      {isEditing ? (
        <>
          <EditAddress data={formid} index={selectedAddressIndex}  cancel={handleEditToggle} userId={userId}/>
        </>
      ) : (
        <>
          {/* Address List Rendering */}
          <div className="address-details">
            
            {userAddresses && userAddresses.length > 0 ? (
              userAddresses.map((add, index) => (
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
                        <strong>{add.title} {add.users.firstName} {add.users.lastName}</strong>
                        <strong className="phone-number">{add.phoneNumber}</strong>
                      </label>
                      <p>{add.address_line_1}, {add.address_line_2}, {add.landmark}, {add.city} - {add.postalCode}</p>
                    </div>

                    {/* Edit and Deliver Here Buttons */}
                    {selectedAddressIndex === index && (
                      <div className="deliver-section">
                        <button className="deliver-here" onClick={handleAddressToggle}>
                          Deliver Here
                        </button>
                      </div>


                    )}

                    
                  </div>
                 
                  {selectedAddressIndex === index && (
                      <div>
                        <button className="edit-button" 
                        onClick={() => {
                          
                          console.log(add.title);
                          
                          editData(add.id,add.phoneNumber,add.address_line_1, add.address_line_2, add.landmark, add.city,add.postalCode,add.title)
                          
                        }}>
                          Edit
                        </button>
                      </div>
                    )}
                </div>

              ))
            ) : (
              <p>No addresses found</p>
            )}
          </div>
        </>
      )}
    </>
  ) : (
    <div className="compact-info">
      {userAddresses && userAddresses.length != 0 ? (
    <>

      <span>
        <strong>{userAddresses[selectedAddressIndex]?.title} {userAddresses[selectedAddressIndex]?.users.firstName} {userAddresses[selectedAddressIndex]?.users.lastName}</strong> - <strong>{userAddresses[selectedAddressIndex]?.phoneNumber}</strong>
      </span>
      <span>{userAddresses[selectedAddressIndex]?.address_line_1}, {userAddresses[selectedAddressIndex]?.address_line_2}, {userAddresses[selectedAddressIndex]?.landmark}, {userAddresses[selectedAddressIndex]?.city} - {userAddresses[selectedAddressIndex]?.postalCode}</span>

      <button className="change-button" onClick={handleAddressToggle}>
        Change
      </button>
    </>
    
      ):(<>
        <p>No address found for delivery</p>
        
        <button onClick={handleCreateNewAddressToggle}>Add Address</button>
        </>
    )}
    
    </div>
  )}
</div>

    </div>
    <>
  <div className="checkout-container">
    {isAddressExpanded && (
      <div className="checkout-card expanded">
        <div className="header">
          <div className="step-number">
            {/* Assuming AddIcon is imported */}
            <AddIcon />
          </div>
          <a href="#" onClick={handleCreateNewAddressToggle}>
            Add a new address
          </a>
        </div>

        <div className="content">
          {isCreatingNewAddress && (
            <>
             <p className="edit-header">ADD NEW ADDRESS</p>
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
                sx={{ width: '150px' }}
                variant="outlined"
                margin="normal"
                onChange={(e) => setTitle(e.target.value)}
                >
                <MenuItem value="Mr.">Mr.</MenuItem>
                <MenuItem value="Mrs.">Mrs.</MenuItem>
              </TextField>
  
             
              
  
              {/* Address Fields */}
              <TextField
                id="address-line-1"
                label="Address Line 1"
                fullWidth
                variant="outlined"
                margin="normal"
                onChange={(e) => setAddress1(e.target.value)}
  
              />
              <TextField
                id="address-line-2"
                label="Address Line 2"
                fullWidth
                variant="outlined"
                margin="normal"
                onChange={(e) => setAddress2(e.target.value)}
  
              />
                {/* Name and Phone Number Fields */}
              <Box sx={{ display: 'flex', gap: '10px' }}>
                {/*}
                <TextField
                  id="first-name"
                  label="First Name"
                  fullWidth
                  variant="outlined"
                  value={userAddresses[selectedAddressIndex]?.users.firstName}
                  margin="normal"
                />*/}
                <TextField
                  id="land mark"
                  label="Land Mark"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setLandmark(e.target.value)}
                  margin="normal"
                />
              </Box> 
  
              <Box sx={{ display: 'flex', gap: '10px' }}>
                <TextField
                  id="city"
                  label="City"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  onChange={(e) => setCity(e.target.value)}
                />
                <TextField
                  id="postal-code"
                  label="Postal Code"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  onChange={(e) => setPostalCode(e.target.value)}
  
                />
                <TextField
                id="phone-number"
                label="10-digit mobile Number"
                fullWidth
                variant="outlined"
                margin="normal"
                onChange={(e) => setPhoneNumber(e.target.value)}
  
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
                  onClick={handleSave}              >
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
                  onClick={handleCancelAddress}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
            </>
          )}
        </div>
      </div>
    )}
  </div>
</>


    </div>
    
  )
}

export default AddressList