// styles/theme.js
export const theme = {
  colors: {
    primary: '#ff3b49',
    secondary: '#1a1a2e',
    accent: '#00c7d3',
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    text: {
      primary: '#2d2d2d',
      secondary: '#5a5a5a',
      inverted: '#ffffff'
    },
    background: {
      light: '#f8f9fa',
      dark: '#121212'
    }
  },
  typography: {
    fonts: {
      primary: 'Inter, sans-serif',
      secondary: 'Georgia, serif'
    },
    sizes: {
      h1: '2.5rem',
      h2: '2rem',
      h3: '1.75rem',
      body: '1rem',
      small: '0.875rem'
    },
    weights: {
      regular: 400,
      medium: 500,
      bold: 700
    }
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '48px'
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px'
  },
  shadows: {
    card: '0 4px 6px rgba(0, 0, 0, 0.1)',
    hover: '0 8px 15px rgba(0, 0, 0, 0.2)'
  }
};