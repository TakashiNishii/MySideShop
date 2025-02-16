import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Header from '@/components/common/Layout/Header'
import { theme } from '@/styles/theme'
import cartReducer from '@/store/slices/cartSlice'

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
  })
}

const renderWithTheme = (component, initialState = {}) => {
  const store = createMockStore(initialState)
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {component}
      </ThemeProvider>
    </Provider>
  )
}

describe('Header', () => {
  it('Should render the title', () => {
    renderWithTheme(<Header />)
    expect(screen.getByText('MySide Shop 🏬')).toBeInTheDocument()
  })

  it('Should render the links', () => {
    renderWithTheme(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Checkout')).toBeInTheDocument()
    expect(screen.getByText('About us')).toBeInTheDocument()
  })

  it('Should have the sign-up link with the class sign-up', () => {
    renderWithTheme(<Header />)
    const signUpLink = screen.getByText('Sign up')
    expect(signUpLink).toHaveClass('sign-up')
  })
}) 