import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Filters from '@/components/products-list/filters/Filters';

describe('Filters Component', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        filters: (state = { searchQuery: '', selectedCategory: null }, action) => state,
        products: (state = { items: [], loading: false, error: null }, action) => state
      }
    });
  });

  it('Should render the component correctly', () => {
    render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    expect(screen.getByPlaceholderText('Buscar produto')).toBeInTheDocument();
  });
});
