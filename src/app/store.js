import { configureStore } from "@reduxjs/toolkit";
import productsReducer, {
  productFetching,
} from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    //multiple reducers will be here
    product: productsReducer,
  },
});

store.dispatch(productFetching());
