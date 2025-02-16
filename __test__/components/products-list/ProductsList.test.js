import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { ThemeProvider } from 'styled-components'
import ProductsList from '@/components/products-list/ProductsList'
import { themeMock } from '../../mocks/themeMock'
import * as productsService from '@/services/productsService'

jest.mock('@/services/productsService')

const mockProducts = {
  products: [
    {
      id: 1,
      title: 'Produto 1',
      price: 99.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Produto 2',
      price: 199.99,
      image: 'https://via.placeholder.com/150',
    },
  ],
}

const renderWithProviders = (ui, { initialState = {} } = {}) => {
  const store = configureStore({
    reducer: {
      products: (state = { items: mockProducts, loading: false, error: null }) => state,
      filters: (state = { searchQuery: '', selectedCategory: null }) => state,
    },
  })
  return render(
    <Provider store={store}>
      <ThemeProvider theme={themeMock}>
        {ui}
      </ThemeProvider>
    </Provider>
  )
}

describe('ProductsList', () => {
  beforeEach(() => {
    productsService.getProducts.mockResolvedValue(mockProducts)
  })

  it('should fetch and display products', async () => {
    renderWithProviders(<ProductsList />)

    await waitFor(() => {
      expect(screen.getByTestId('products-section')).toBeInTheDocument()
    })
  })
}) 