// ProductView.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductSIngle from '../components/ProductSIngle';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const PostProductView = () => {
  const { id } = useParams();
  const location = useLocation();
  const imageUrl = location.state?.url;
  const {postgreProducts:products,status } = useSelector(state => state.postgreProduct);

console.log("postproview"+imageUrl);

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

		<ProductSIngle pro={selectedProduct} image={imageUrl}/>
		




  
    </>
  );
};

export default PostProductView;
