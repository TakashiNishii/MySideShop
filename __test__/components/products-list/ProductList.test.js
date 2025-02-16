import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Products from '@/components/products-list/products/Products'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} alt={props.alt} />
  },
}))

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
  },
}

const mockProducts = [
  {
    id: 1,
    title: 'Produto Teste 1',
    price: 99.99,
    image: 'https://example.com/image1.jpg',
    description: 'Descrição do produto 1',
    category: 'electronics',
    model: 'Modelo 1'
  },
  {
    id: 2,
    title: 'Produto Teste 2',
    price: 149.99,
    image: 'https://example.com/image2.jpg',
    description: 'Descrição do produto 2',
    category: 'electronics',
    model: 'Modelo 2'
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
    category: null
  }
}

const createMockStore = (initialState) => configureStore({
  reducer: {
    products: (state = initialState.products) => state,
    filters: (state = initialState.filters) => state
  }
})

const renderWithProviders = (ui, { initialState = mockInitialState } = {}) => {
  const store = createMockStore(initialState)
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
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
    expect(screen.getByText('Model: Modelo 1')).toBeInTheDocument()
    expect(screen.getByText('Model: Modelo 2')).toBeInTheDocument()
  })

  it('Should render the loading state during loading', () => {
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

  it('Should render the error message when there is an error', () => {
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
    expect(productsGrid.children).toHaveLength(0)
  })
})
