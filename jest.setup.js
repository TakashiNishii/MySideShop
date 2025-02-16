import '@testing-library/jest-dom'
import 'jest-styled-components'

// Mock do next/router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    };
  },
}));

// Mock do next/link
jest.mock('next/link', () => {
  return ({ children, ...props }) => {
    return <a {...props}>{children}</a>;
  };
}); 