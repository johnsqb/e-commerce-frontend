import React from "react";
import './filter.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import RangeSlider from "../RangeSlider";
import { grey } from "@mui/material/colors";
import Dropdown from "./Dropdowns";
import Maxx from "./Max";
import Dropcollapse from "./DropCollapse";
import CheckboxDropdown from "./Dropdowncheck";
const Filterr=()=>{
    return(
        <div className="filt">
        <div className="box"><span className="filters">Filters</span>
        <span className="clear">Clear</span></div>
        <div className="box1"><span className="filters">Categories</span> 
        <div className="arrow"><ArrowBackIosNewIcon sx={{ color: grey[500], fontSize:'17px'}}/>
        <span className="cr">Sports shoes for men</span>
        </div>
        <div className="arrow"><ArrowBackIosNewIcon sx={{ color: grey[500], fontSize:'17px'}}/>
        <span className="cr">Premium Sports shoes</span>
        </div>
        </div>
         
        <div className="box1"><span className="filters">Price</span> 
        {/* <div className="arrow"><ArrowBackIosNewIcon/>
        <span>Computer</span>
        </div>
        <div className="arrow"><ArrowBackIosNewIcon/>
        <span>Computer</span>
        </div> */}
          <RangeSlider min={500} max={1000} step={1} initialValue={50} />
          <div><Dropdown/></div>
          <div><Maxx/></div>
        </div>
       
        <div className="box2"><span className="filters">Brand</span> 
        {/* <div className="arrow"><ArrowBackIosNewIcon/>
        <span>Computer</span>
        </div>
        <div className="arrow"><ArrowBackIosNewIcon/>
        <span>Computer</span>
        </div> */}
           <Dropcollapse/>
       
        </div>
        <div className="box4"><span className="filterss">Color</span> 
        <CheckboxDropdown/>
        </div>
        </div>
        
    );
    
}
export default Filterr