import React, { useEffect, useState } from "react";
import Items from "./item";
import "./styles.css";
import { Favorite, Filter, StoreMallDirectory } from "@mui/icons-material";
import Filterr from "./components/filter";
import StarIcon from '@mui/icons-material/Star';
import { grey } from "@mui/material/colors";


export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(Items);

  let filters = ["Bags", "Watches", "Sports", "Sunglasses"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = Items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...Items]);
    }
  };

  return (
    <div>
      <div className="buttons-container">
        <div className="bts">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
        </div>

      </div>
      <div className="flsgs">
        <div>
        <Filterr/>
        </div>
      <div className="items-container">
    
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <div className="heart">
            <Favorite/>
            </div>
            <div className="desc">
            <img src={item.image} className='imagess'></img>
            <div className="span1_1"><span className="span11">{item.name}</span></div>
            {/* <span className="span111">njsnxs</span> */}
            <div className="rating">{item.rating}<StarIcon sx={{ color: grey[500], fontSize:'17px'}}/></div>
            <div className="desc1"><span className="desc11">{item.desc}</span></div>
            <span className="span4">₹{item.offerPrice}</span>
            <span className="span2">₹{item.actualPrice}</span>
           
            
            <p className="category">{item.category}</p>
            </div>
            
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
