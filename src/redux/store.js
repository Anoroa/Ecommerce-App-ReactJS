import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "./productSlice.js";

export default configureStore({
    reducer: {
        products: productsReducer,
    },
});
