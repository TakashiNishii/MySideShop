import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '@/store/slices/filtersSlice';

export const useCategories = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    categories: state.filters.categories,
    loading: state.filters.status === 'loading',
    error: false
  }));

  return {
    ...state,
    fetchCategories: () => dispatch(fetchCategories())
  };
};