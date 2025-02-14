import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById, clearSelectedProduct } from '../store/slices/productsSlice';

export const useProductById = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    data: state.products.selectedProduct,
    loading: state.products.loading,
    error: state.products.error
  }));

  return {
    ...state,
    getProduct: (id) => dispatch(fetchProductById(id)),
    clearProduct: () => dispatch(clearSelectedProduct())
  };
};