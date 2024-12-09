import { configureStore} from '@reduxjs/toolkit'
 import productReducer from '../Reducers/product/ProductSlice'
import cartReducer from '../Reducers/cart/CartSlice';
import postCartReducer from '../Reducers/cart/postCartSlice'

import authReducer from '../Reducers/auth/authSlice'
import categoryReducer from '../Reducers/categories/categorySlice'
import postgreProductReducer from '../Reducers/postgreProduct/PostgreProductSlice'
import AddressReducer from '../Reducers/addresses/AddressSlice'


const storedToken = sessionStorage.getItem('jwtToken');



export const store = configureStore({

    reducer:{
        cart: cartReducer,
        postCart:postCartReducer,
        product: productReducer,
        auth: authReducer,
        category:categoryReducer,
        postgreProduct:postgreProductReducer,
        address:AddressReducer


    },  preloadedState: {
        auth: {
          token: storedToken,
          isAuthenticated: !!storedToken, // Set isAuthenticated based on presence of token
          loading: false,
          error: null,
        }
}
}
);




