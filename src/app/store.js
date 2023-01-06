import { configureStore } from "@reduxjs/toolkit";
import productsReducer, {
  productFetching,
} from "../features/product/productSlice";
import cartReducer from "../features/product/cartSlice";

export const store = configureStore({
  reducer: {
    //multiple reducers will be here
    product: productsReducer,
    cart: cartReducer,
  },
});

store.dispatch(productFetching());
