import { getAllCategories } from '@/services/productsService';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
  'filters/fetchCategories',
  async () => {
    const response = await getAllCategories();
    return response;
  }
);

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    categories: [],
    searchQuery: '',
    category: 'all',
    status: 'idle',
    error: null
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setSearchQuery, setCategory } = filtersSlice.actions;
export default filtersSlice.reducer;