// ProductView.js
import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductSIngle from '../components/ProductSIngle';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { fetchPostgreProducts } from '../redux/Reducers/postgreProduct/PostgreproductApi';
import { getProductsStatus, selectAllProducts } from '../redux/Reducers/postgreProduct/PostgreProductSlice'

const PostProductView = () => {
  const { id } = useParams();
  const location = useLocation();
  const imageUrl = location.state?.url;
  const {postgreProducts:products,status } = useSelector(state => state.postgreProduct);

  const dispatch = useDispatch();

// console.log("postproview"+imageUrl[0].filePath);
const productStatus = useSelector(getProductsStatus)

  const selectedProduct = products.find((product) => product.id === parseInt(id));
  
  useEffect(() => {

    if (productStatus === 'idle') {
      dispatch(fetchPostgreProducts());
    }
  }, [productStatus ,dispatch]);


  if (status === 'loading' || !products) {
    return <div>Loading...</div>;
  }

  
     console.log(products);


  if (!selectedProduct) {
    return <div>product not found</div>; // Handle case where product is not found
  }

  return (
    <>
    <section className="xzoom_part">
    <div className="container">
		<ProductSIngle pro={selectedProduct} image={imageUrl}/>
		</div>
    </section>




  
    </>
  );
};

export default PostProductView;
