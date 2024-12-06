import { configureStore} from '@reduxjs/toolkit'
 import productReducer from '../Reducers/product/ProductSlice'
import cartReducer from '../Reducers/cart/CartSlice';
import authReducer from '../Reducers/auth/authSlice'
import categoryReducer from '../Reducers/categories/categorySlice'


const storedToken = sessionStorage.getItem('jwtToken');



export const store = configureStore({

    reducer:{
        cart: cartReducer,
        product: productReducer,
        auth: authReducer,
        category:categoryReducer


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




