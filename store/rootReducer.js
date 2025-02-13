import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import filtersReducer from './slices/filtersSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  filters: filtersReducer
});

export default rootReducer;