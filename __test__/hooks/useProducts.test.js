import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useProducts } from '@/hooks/useProducts';
import * as productsService from '@/services/productsService';

// Mock do serviço
jest.mock('@/services/productsService');

const createWrapper = () => {
  const store = configureStore({
    reducer: {
      products: (state = {
        items: { products: [] },
        status: 'idle',
        error: null
      }) => state,
      filters: (state = {
        searchQuery: '',
        category: 'all'
      }) => state
    }
  });

  const TestWrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  TestWrapper.displayName = 'TestWrapper';

  return TestWrapper;
};

describe('useProducts Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should return initial state', () => {
    const { result } = renderHook(() => useProducts(), {
      wrapper: createWrapper()
    });

    expect(result.current.data).toEqual({ products: [] });
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});