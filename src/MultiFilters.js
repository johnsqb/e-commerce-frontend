import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./styles.css";
import { Favorite } from "@mui/icons-material";
import Filterr from "./components/filter";
import StarIcon from "@mui/icons-material/Star";
import { grey } from "@mui/material/colors";
import { getProductsStatus, selectAllProducts } from './redux/Reducers/postgreProduct/PostgreProductSlice';
import { fetchPostgreProducts } from './redux/Reducers/postgreProduct/PostgreproductApi';
import { useDispatch, useSelector } from 'react-redux';

export default function MultiFilters(props) {
  const BASE_URL = 'http://localhost:8080';
const categoryList = props.list || [];

  const dispatch = useDispatch();
  const productStatus = useSelector(getProductsStatus);
  const products = useSelector(selectAllProducts);

  const [subCat,setSubCat] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = ["Bags", "Watches", "Sports", "Sunglasses"];

  // Fetch products if status is idle
  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchPostgreProducts());
    }
  }, [productStatus, dispatch]);


  useEffect(() => {
    const filteredProducts = products.filter(product =>
      categoryList.includes(product.subCategories.categories.name)
    );

    setFilteredItems(filteredProducts);
    const subCategories =[...new Set(filteredProducts.map(product => product.subCategories.name))];
    setSubCat(subCategories)
        

    if (selectedFilters.length > 0) {
      const tempItems = selectedFilters.map(selectedCategory =>
        filteredProducts.filter(item => item.subCategories.name === selectedCategory)
      );
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems(filteredProducts);
    }
  }, [products, selectedFilters, categoryList]);


  const handleFilterButtonClick = (selectedCategory) => {
    console.log(selectedCategory);
    console.log(selectedFilters);
    
    
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };





  return (
    <>
      <div className="buttons-container">
        <div className="bts">
          {subCat.map((category, idx) => (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`button ${
                selectedFilters.includes(category) ? "active" : ""
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
          <Filterr />
        </div>
        <div className="items-container">
          {filteredItems.length === 0 ? (
            <h3 className="noCategory">No products available for this category.</h3>
          ) : (
            filteredItems.map((item, idx) => (
              <div key={`items-${idx}`} className="item">
                <div className="heart">
                  <Favorite />
                </div>
                <div className="desc">
                  <img
                    src={`${BASE_URL}${item.image[0].filePath}`}
                    className="imagess"
                    alt={item.name}
                  />
                  <div className="span1_1">
                    <span className="span11">{item.name}</span>
                  </div>
                  <div className="rating">
                    {item.rating}
                    <StarIcon sx={{ color: grey[500], fontSize: "17px" }} />
                  </div>
                  <div className="desc1">
                    <span className="desc11">{item.description}</span>
                  </div>
                  <span className="span4">₹{item.price}</span>
                  <p className="category">{item.subCategories.name}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
