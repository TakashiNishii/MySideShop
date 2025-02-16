import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { ThemeProvider } from 'styled-components'
import Products from '@/components/products-list/products/Products'
import { themeMock } from '../../mocks/themeMock'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />
  },
}))

const mockProducts = [
  {
    id: 1,
    title: 'Produto Teste 1',
    price: 99.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Produto Teste 2',
    price: 149.99,
    image: 'https://via.placeholder.com/150'
  }
]

const mockInitialState = {
  products: {
    items: {
      products: mockProducts
    },
    status: 'idle',
    error: null
  },
  filters: {
    searchQuery: '',
    category: 'all',
    page: 1
  }
}

const createMockStore = (initialState = mockInitialState) => configureStore({
  reducer: {
    products: (state = initialState.products) => state,
    filters: (state = initialState.filters) => state
  }
})

const renderWithProviders = (ui, { initialState = mockInitialState } = {}) => {
  const store = createMockStore(initialState)
  return render(
    <Provider store={store}>
      <ThemeProvider theme={themeMock}>
        {ui}
      </ThemeProvider>
    </Provider>
  )
}

describe('Products', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should render the products list correctly', () => {
    renderWithProviders(<Products />)
    expect(screen.getByText('Produto Teste 1')).toBeInTheDocument()
    expect(screen.getByText('Produto Teste 2')).toBeInTheDocument()
  })

  it('Should render loading state', () => {
    const loadingState = {
      ...mockInitialState,
      products: {
        ...mockInitialState.products,
        status: 'loading'
      }
    }

    renderWithProviders(<Products />, { initialState: loadingState })
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('Should render error state', () => {
    const errorState = {
      ...mockInitialState,
      products: {
        ...mockInitialState.products,
        error: 'Erro ao carregar produtos'
      }
    }

    renderWithProviders(<Products />, { initialState: errorState })
    expect(screen.getByText('Error: Erro ao carregar produtos')).toBeInTheDocument()
  })

  it('Should render an empty grid when there are no products', () => {
    const emptyState = {
      ...mockInitialState,
      products: {
        ...mockInitialState.products,
        items: { products: [] }
      }
    }

    renderWithProviders(<Products />, { initialState: emptyState })
    const productsGrid = screen.getByTestId('products-section')
    expect(productsGrid).toBeInTheDocument()
  })
})
