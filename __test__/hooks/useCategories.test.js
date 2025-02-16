import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useCategories } from '@/hooks/useCategories';
import * as productsService from '@/services/productsService';

jest.mock('@/services/productsService');

const createWrapper = () => {
  const store = configureStore({
    reducer: {
      filters: (state = {
        categories: [],
        status: 'idle',
        error: null,
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

describe('useCategories Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should return initial state', () => {
    const { result } = renderHook(() => useCategories(), {
      wrapper: createWrapper()
    });

    expect(result.current.categories).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);
  });
}); 