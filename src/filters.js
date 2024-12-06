import React from "react";
import { useState } from "react";
import Data from "./components/Data";
import Cards from "./cards1";
import Buttons from "./buttons";
function Filters(){
    const[item,setItems]=useState(Data)
    const menuItems = [...new Set(Data.map((item)=>item.name))]
    const filterItems=(nam)=>{
        const newItems=Data.filter((newval)=>newval.name === nam)
        setItems(newItems)
    }
    return(
        <div className="container-fluid">
            <div className="row">
          <h1 className=""></h1>
          <Buttons
          menuItems={menuItems}
          filterItems={filterItems}
          setItems={setItems}
          />
          <Cards item={item}/>
            </div>
        </div>
    );
}
export default Filters