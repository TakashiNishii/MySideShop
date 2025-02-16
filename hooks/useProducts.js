import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { fetchProducts } from '../store/slices/productsSlice';
import { setSearchQuery, setCategory } from '../store/slices/filtersSlice';

const selectProductsState = createSelector(
  [(state) => state.products, (state) => state.filters],
  (products, filters) => ({
    data: products?.items,
    loading: products?.status === 'loading',
    error: products?.error,
    searchQuery: filters?.searchQuery,
    selectedCategory: filters?.category
  })
);

export const useProducts = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectProductsState);

  return {
    ...state,
    fetchProducts: () => dispatch(fetchProducts()),
    setSearchQuery: (query) => dispatch(setSearchQuery(query)),
    setCategory: (category) => dispatch(setCategory(category))
  };
};