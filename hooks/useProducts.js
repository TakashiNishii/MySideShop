import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/slices/productsSlice';
import { setSearchQuery, setCategory } from '../store/slices/filtersSlice';

export const useProducts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    data: state.products.items,
    loading: state.products.status === 'loading',
    error: state.products.error,
    searchQuery: state.filters.searchQuery,
    selectedCategory: state.filters.category
  }));

  return {
    ...state,
    fetchProducts: () => dispatch(fetchProducts()),
    setSearchQuery: (query) => dispatch(setSearchQuery(query)),
    setCategory: (category) => dispatch(setCategory(category))
  };
};