import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductById, getProducts } from '../../services/productsService';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { getState }) => {
    const { filters } = getState();
    const response = await getProducts(filters);
    return response;
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId) => {
    const response = await getProductById(productId);
    return response;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    selectedProduct: null,
    status: 'idle',
    error: null,
    loading: false
  },
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedProduct = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.loading = false;
      });
  }
});

export const { clearSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;