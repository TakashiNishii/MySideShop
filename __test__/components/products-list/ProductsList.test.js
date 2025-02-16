import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { ThemeProvider } from 'styled-components'
import ProductsList from '@/components/products-list/ProductsList'
import { themeMock } from '../../mocks/themeMock'
import productsReducer from '@/store/slices/productsSlice'
import filtersReducer from '@/store/slices/filtersSlice'

jest.mock('@/services/productsService', () => ({
  getProducts: jest.fn(),
  searchProducts: jest.fn()
}))

const createMockStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      products: productsReducer,
      filters: filtersReducer
    },
    preloadedState: {
      products: {
        items: [],
        status: 'idle',
        error: null,
        ...initialState.products
      },
      filters: {
        searchQuery: '',
        category: 'all',
        page: 1,
        ...initialState.filters
      }
    }
  })
}

const renderWithProviders = (ui, { initialState = {} } = {}) => {
  const store = createMockStore(initialState)
  return render(
    <Provider store={store}>
      <ThemeProvider theme={themeMock}>
        {ui}
      </ThemeProvider>
    </Provider>
  )
}

describe('ProductsList', () => {
  it('should render loading state', () => {
    renderWithProviders(<ProductsList />, {
      products: { status: 'loading' }
    })
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
}) 