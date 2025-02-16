import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { Suspense } from 'react'
import Header from '@/components/common/Layout/Header'

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        {component}
      </Suspense>
    </ThemeProvider>
  )
}

describe('Header', () => {
  it('Should render the title', () => {
    renderWithTheme(<Header />)
    const title = screen.getByText(/MySide Shop/i)
    expect(title).toBeInTheDocument()
  })

  it('Should render the links', () => {
    renderWithTheme(<Header />)

    const catalogueLink = screen.getByRole('link', { name: /catalogue/i })
    const cartLink = screen.getByRole('link', { name: /cart/i })
    const aboutLink = screen.getByRole('link', { name: /about us/i })
    const signUpLink = screen.getByRole('link', { name: /sign up/i })

    expect(catalogueLink).toBeInTheDocument()
    expect(cartLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(signUpLink).toBeInTheDocument()
  })

  it('Should have the sign-up link with the class sign-up', () => {
    renderWithTheme(<Header />)
    const signUpLink = screen.getByRole('link', { name: /sign up/i })
    expect(signUpLink).toHaveClass('sign-up')
  })
}) 