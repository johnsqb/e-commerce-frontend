import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { add } from '../../redux/Reducers/cart/CartSlice';



const AddToCart = (props) => {

  const dispatch = useDispatch();


  const ToCart = (product)=>{

    dispatch(add(product))
    console.log(product);

     

 };
  return (

    <div>
         <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black" onClick={()=>ToCart(props)}>
                           Add to Cart
                          <svg className="cart-outline">
                          <use xlinkHref="#cart-outline"></use>
                          </svg>
                      </a>,
                    </div>
            </div>
    </div>
  )
}

export default AddToCart