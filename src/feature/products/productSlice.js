import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from '../../API/ProductAPI';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await fetchProducts();
  console.log('API data',response);
  return response;
});
const productSlice=createSlice({
    name:'products',
    initialState:{
        items:[],
        status: null,
    },
    extraReducers: (builder) => {
      builder
        .addCase(getProducts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getProducts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;  // Update state with the fetched data
        })
        .addCase(getProducts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    }
});

export default productSlice.reducer;