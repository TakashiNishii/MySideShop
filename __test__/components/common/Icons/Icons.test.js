import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Icons } from '@/components/common/Icons/Icons'
import { theme } from '@/styles/theme'

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  )
}

describe('Icons', () => {
  it('Should render all icons by your category', () => {
    const iconKeys = ['tv', 'audio', 'laptop', 'mobile', 'gaming', 'appliances']

    iconKeys.forEach(key => {
      const { container } = renderWithTheme(Icons[key])
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })
})