import { configureStore} from '@reduxjs/toolkit'
 import productReducer from '../Reducers/product/ProductSlice'
import cartReducer from '../Reducers/cart/CartSlice';



export const store = configureStore({


    reducer:{
        cart: cartReducer,
        product: productReducer,

    }, 
}
);



