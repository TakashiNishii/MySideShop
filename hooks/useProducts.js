import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { fetchProducts } from '../store/slices/productsSlice';
import { setSearchQuery, setCategory, setPage, setTotalPages } from '../store/slices/filtersSlice';

const selectProductsState = createSelector(
  [(state) => state.products, (state) => state.filters],
  (products, filters) => ({
    data: products?.items,
    loading: products?.status === 'loading',
    error: products?.error,
    searchQuery: filters?.searchQuery,
    selectedCategory: filters?.category,
    page: filters?.page,
    totalPages: filters?.totalPages
  })
);

export const useProducts = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectProductsState);

  const fetchProductsWithPagination = async () => {
    const response = await dispatch(fetchProducts());
    if (response.payload?.totalPages) {
      dispatch(setTotalPages(response.payload.totalPages));
    }
  };

  return {
    ...state,
    fetchProducts: fetchProductsWithPagination,
    setSearchQuery: (query) => dispatch(setSearchQuery(query)),
    setCategory: (category) => dispatch(setCategory(category)),
    setPage: (page) => dispatch(setPage(page))
  };
};