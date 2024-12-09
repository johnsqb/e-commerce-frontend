import { Label } from '@mui/icons-material';
import React, { useState } from 'react';
import './Max.css'
function Maxx(){
    const [value,setValue]=useState('')
    const options=[
        {label:"max",value:0},
        {label:900,value:1},
        {label:800,value:2},
        {label:700,value:3},
        {label:600,value:3},
        {label:500,value:3},
        {label:400,value:3},
        {label:300,value:3},
        {label:200,value:3},
        
    ]
    function handleSelect(event){
     setValue(event.target.value)
    }
    return(
        <div  className='max'>
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
export default Maxx