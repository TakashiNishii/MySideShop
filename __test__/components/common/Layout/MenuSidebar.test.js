import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import MenuSidebar from '@/components/common/Layout/sidebar/MenuSidebar'

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  )
}

describe('MenuSidebar', () => {
  it('Should render the menu button', () => {
    renderWithTheme(<MenuSidebar />)
    const menuButton = screen.getByLabelText(/menu/i)
    expect(menuButton).toBeInTheDocument()
  })

  it('Should render the sidebar', () => {
    renderWithTheme(<MenuSidebar />)
    const menuButton = screen.getByLabelText(/menu/i)

    fireEvent.click(menuButton)

    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveAttribute('data-isopen', 'true')
  })

  it('Should close the sidebar', () => {
    renderWithTheme(<MenuSidebar />)

    // Abre o sidebar
    const menuButton = screen.getByLabelText(/menu/i)
    fireEvent.click(menuButton)

    // Fecha o sidebar
    const closeButton = screen.getByLabelText(/close/i)
    fireEvent.click(closeButton)

    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveAttribute('data-isopen', 'false')
  })
}) 