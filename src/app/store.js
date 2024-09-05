import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../feature/products/productSlice';
import cartReducer from '../feature/products/cartSlice';
const store= configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer ,
    },
});

export default store;