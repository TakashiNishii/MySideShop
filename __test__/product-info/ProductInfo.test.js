import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { theme } from '@/styles/theme'
import ProductInfo from '@/components/product-info/ProductInfo'

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: jest.fn((param) => {
      const mockData = {
        product: {
          title: 'Produto Teste',
          price: 99.99,
          description: 'Descrição do produto teste',
          image: 'url-da-imagem-teste'
        }
      }
      return mockData[param]
    })
  })
}))

const mockStore = configureStore({
  reducer: {
    products: (state = {
      selectedProduct: {
        product: {
          title: 'Produto Teste',
          price: 99.99,
          description: 'Descrição do produto teste',
          image: 'https://via.placeholder.com/150',
          brand: 'Marca Teste',
          model: 'Modelo Teste',
          category: 'Categoria Teste',
          color: 'Cor Teste'
        }
      },
      loading: false,
      error: null
    }) => state
  }
})

const renderWithTheme = (component) => {
  return render(
    <Provider store={mockStore}>
      <ThemeProvider theme={theme}>
        {component}
      </ThemeProvider>
    </Provider>
  )
}

describe('ProductInfo', () => {
  it('Deve renderizar as informações do produto corretamente', () => {
    renderWithTheme(<ProductInfo />)

    expect(screen.getByText('Produto Teste')).toBeInTheDocument()

    expect(screen.getByText('$99.99')).toBeInTheDocument()

    expect(screen.getByText('Descrição do produto teste')).toBeInTheDocument()

    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', 'Produto Teste')
  })

  it('Deve exibir mensagem quando os dados do produto não estiverem disponíveis', () => {
    const emptyStore = configureStore({
      reducer: {
        products: (state = {
          selectedProduct: null,
          loading: false,
          error: null
        }) => state
      }
    })

    render(
      <Provider store={emptyStore}>
        <ThemeProvider theme={theme}>
          <ProductInfo />
        </ThemeProvider>
      </Provider>
    )

    expect(screen.getByText('Product not found')).toBeInTheDocument()
  })
})

