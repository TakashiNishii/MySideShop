import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background.light};
  box-shadow: ${({ theme }) => theme.shadows.card};

  h1 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.sizes.h2};
  }
`;

export const NavigationDiv = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.primary};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    &.sign-up {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.typography.weights.bold};
    }
  }
`; 