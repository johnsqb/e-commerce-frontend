// ProductView.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductSIngle from '../components/ProductSIngle';
import Footer from '../components/Footer';

const ProductView = () => {
  const { id } = useParams();
  const {data:products,status } = useSelector(state => state.product);

  // console.log(products);

  const selectedProduct = products.find((product) => product.id === parseInt(id));
  

  if (status === 'loading' || !products) {
    return <div>Loading...</div>;
  }

  
     console.log(products);


  if (!selectedProduct) {
    return <div>product not found</div>; // Handle case where product is not found
  }

  return (
    <>

		<ProductSIngle pro={selectedProduct}/>
		




  
    </>
  );
};

export default ProductView;
