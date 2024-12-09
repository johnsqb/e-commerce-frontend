import { CheckBox } from "@mui/icons-material";
import React,{useState} from "react";
import Select from "react-dropdown-select";
import './collapse.css'
function Dropcollapse(){
    const [value,setValue]=useState()
    const options=[
        {id:"PUMA",name:1},
        {id:"ADIDAS",name:2},
        {id:"NIKE",name:3},
        {id:"CAMPUS",name:4},
        {id:"BATA",name:5},
        {id:"WOODLAND",name:6},
        {id:"CROCS",name:7},
        {id:"ZAPTOE",name:8},
        {id:"ZNSROYAL",name:9},
        {id:"ZIXER",name:10}
    ]
    return(
        <div className="">
            <div>
            <Select
            name="select"
            options = {options}
            labelField="id"
            valueField="name"
            multi
            onChange={value=>setValue(value)}
            >
               

            </Select>
            {/* {value.map(d=>(<p>id:{d.id} | Name:{d.name}</p>))} */}
            </div>
        </div>
    )
}
export default Dropcollapse