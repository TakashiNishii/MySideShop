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
      cart: initialState
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
    const homeLink = screen.getByRole('link', { name: 'Home', exact: true })
    const checkoutLink = screen.getByRole('link', { name: 'Checkout', exact: true })
    const aboutLink = screen.getByRole('link', { name: 'About us', exact: true })

    expect(homeLink).toBeInTheDocument()
    expect(checkoutLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
  })

  it('Should have the sign-up link with the class sign-up', () => {
    renderWithTheme(<Header />)
    const signUpLink = screen.getByRole('link', { name: 'Sign up', exact: true })
    expect(signUpLink).toHaveClass('sign-up')
  })
}) 