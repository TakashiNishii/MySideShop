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
    page: 1,
    totalPages: 1 // Será atualizado com o valor real retornado pela API
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.page = 1; // Reset página ao buscar
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      state.page = 1; // Reset página ao mudar categoria
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
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

export const { setSearchQuery, setCategory, setPage, setTotalPages } = filtersSlice.actions;
export default filtersSlice.reducer;