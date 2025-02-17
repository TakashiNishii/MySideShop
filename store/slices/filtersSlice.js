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
    totalPages: 15
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.page = 1;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      const newPage = Math.max(1, Math.min(action.payload, state.totalPages));
      state.page = newPage;
    },
    setTotalPages: (state, action) => {
      state.totalPages = Math.max(1, action.payload);
      if (state.page > state.totalPages) {
        state.page = state.totalPages;
      }
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