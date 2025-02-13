import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fonts.primary};
    background-color: ${({ theme }) => theme.colors.background.light};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    line-height: 1.2;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverted};
    border: none;
    padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      transform: translateY(-2px);
    }

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }

  input, textarea {
    border: 1px solid #ddd;
    padding: ${({ theme }) => theme.spacing.small};
    border-radius: 4px;
    width: 100%;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 2px rgba(255, 59, 73, 0.2);
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.medium};
  }

  .flex {
    display: flex;
    gap: ${({ theme }) => theme.spacing.medium};

    &-center {
      align-items: center;
      justify-content: center;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Responsividade */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    html {
      font-size: 14px;
    }
    
    .container {
      padding: 0 ${({ theme }) => theme.spacing.small};
    }
  }
`;