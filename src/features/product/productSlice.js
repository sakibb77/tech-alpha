import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productFetching = createAsyncThunk(
  "products/productFetching",
  async () => {
    const res = await axios.get(
      "https://eager-sable-airedale.glitch.me/products"
    );
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //if product fetching pending
    builder.addCase(productFetching.pending, (state, action) => {
      state.status = "pending";
    });

    //if product fetching fulfilled
    builder.addCase(productFetching.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.items = action.payload;
    });
    //if product fetching rejected
    builder.addCase(productFetching.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default productSlice.reducer;
