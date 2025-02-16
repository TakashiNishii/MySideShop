import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { fetchCategories } from '../store/slices/filtersSlice';

const selectCategoriesState = createSelector(
  [(state) => state.filters],
  (filters) => ({
    categories: filters.categories,
    loading: filters.status === 'loading',
    error: false
  })
);

export const useCategories = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectCategoriesState);

  return {
    ...state,
    fetchCategories: () => dispatch(fetchCategories())
  };
};