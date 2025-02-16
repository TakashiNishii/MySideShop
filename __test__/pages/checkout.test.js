import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider } from 'styled-components';
import Checkout from '@/pages/checkout';
import { theme } from '@/styles/theme';
import cartReducer from '@/store/slices/cartSlice';

const mockPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush
  })
}));

const createMockStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      cart: cartReducer
    },
    preloadedState: {
      cart: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
        ...initialState
      }
    }
  });
};

const renderWithProviders = (ui, { initialState } = {}) => {
  const store = createMockStore(initialState);
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {ui}
      </ThemeProvider>
    </Provider>
  );
};

describe('Checkout Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render empty cart message when no items', () => {
    renderWithProviders(<Checkout />);
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  it('Should render checkout with items', () => {
    const mockItems = [{
      id: 1,
      title: 'Test Product',
      price: 99.99,
      quantity: 2,
      image: 'test.jpg'
    }];

    renderWithProviders(<Checkout />, {
      initialState: {
        items: mockItems,
        totalQuantity: 2,
        totalPrice: 199.98
      }
    });

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
    expect(screen.getByText('Total price: R$ 199.98')).toBeInTheDocument();
  });

  it('Should handle checkout process', async () => {
    jest.useFakeTimers();

    const mockItems = [{
      id: 1,
      title: 'Test Product',
      price: 99.99,
      quantity: 1,
      image: 'test.jpg'
    }];

    renderWithProviders(<Checkout />, {
      initialState: {
        items: mockItems,
        totalQuantity: 1,
        totalPrice: 99.99
      }
    });

    fireEvent.click(screen.getByText('Checkout'));

    expect(screen.getByText('Purchase successful! 🎉')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(mockPush).toHaveBeenCalledWith('/');

    jest.useRealTimers();
  });
}); 