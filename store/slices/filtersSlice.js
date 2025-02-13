import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    searchQuery: '',
    category: 'all',
    // Adicione outros filtros se necessário
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    }
  }
});

export const { setSearchQuery, setCategory } = filtersSlice.actions;
export default filtersSlice.reducer;