import React from 'react'
import { useState,useEffect } from 'react';
import { Box, TextField, Button, MenuItem,Typography} from '@mui/material'; 
import { editAddress } from '../../../redux/Reducers/addresses/EditAddressApi';
// import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import {fetchAddresses} from '../../../redux/Reducers/addresses/AddressApi'

const EditAddress = ({ data, cancel,userId }) => {

  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [landmark, setLandmark] = useState('');
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setPhoneNumber(data.phoneNumber);
      setAddress1(data.address1);
      setAddress2(data.address2);
      setCity(data.city);
      setPostalCode(data.postalCode);
      setLandmark(data.landmark);
      setTitle(data.title);
    }
  }, [data]);

  const handleSubmit = async () => {
    const updatedAddress = { address_line_1:address1, address_line_2:address2, city, landmark, postalCode, phoneNumber, title };
    try {
      await dispatch(editAddress({ addressId: data.id, updatedAddress }));
      dispatch(fetchAddresses({userId}));

      cancel(); // Close the form after saving

    } catch (error) {
      console.error("Failed to update address:", error);
    }
  };
    
    
    return (
    <div>
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
              value={title}
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
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}

            />
            <TextField
              id="address-line-2"
              label="Address Line 2"
              fullWidth
              variant="outlined"
              margin="normal"
              value={address2}
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
                value={landmark}
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
              <TextField
              id="phone-number"
              label="10-digit mobile Number"
              fullWidth
              variant="outlined"
              margin="normal"
              value={phoneNumber}
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
                onClick={handleSubmit}              >
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
                onClick={cancel}
              >
                Cancel
              </Button>
            </Box>
          </Box>
    </div>
  )
}

export default EditAddress