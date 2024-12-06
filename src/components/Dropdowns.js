import { Label } from '@mui/icons-material';
import React, { useState } from 'react';
import './Drops.css'
function Dropdown(){
    const [value,setValue]=useState('')
    const options=[
        {label:"min",value:0},
        {label:1200,value:1},
        {label:1500,value:2},
        {label:2000,value:3},
        {label:3000,value:3},
        {label:4000,value:3},
        {label:5000,value:3},
        {label:6000,value:3},
        {label:7000,value:3},
        {label:8000,value:3}
    ]
    function handleSelect(event){
     setValue(event.target.value)
    }
    return(
        <div  className='drop'>
            <div>
                <select className='form-select' onChange={handleSelect}>
                    {
                        options.map(option =>(
                            <option value={option.value}>{option.label}</option>
                        ))
                    }

                </select>
              {/* <p>{value}</p> */}
            </div>

        </div>
    )
}
export default Dropdown