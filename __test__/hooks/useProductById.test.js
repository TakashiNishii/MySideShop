import { useProductById } from '@/hooks/useProductById';
import { renderHook, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import * as productsService from '@/services/productsService';

jest.mock('@/services/productsService');

const mockStore = configureStore({
  reducer: {
    products: (state = {
      selectedProduct: null,
      loading: false,
      error: null,
      status: 'idle'
    }) => state
  }
});

const wrapper = ({ children }) => (
  <Provider store={mockStore}>
    {children}
  </Provider>
);

describe('useProductById', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should return initial state', () => {
    const { result } = renderHook(() => useProductById(1), { wrapper });

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();
  });
}); 