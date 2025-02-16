import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { fetchProductById, clearSelectedProduct } from '../store/slices/productsSlice';

const selectProductState = createSelector(
  [(state) => state.products],
  (products) => ({
    data: products.selectedProduct,
    loading: products.loading,
    error: products.error
  })
);

export const useProductById = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectProductState);

  return {
    ...state,
    getProduct: (id) => dispatch(fetchProductById(id)),
    clearProduct: () => dispatch(clearSelectedProduct())
  };
};