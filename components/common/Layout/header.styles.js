"use client"
import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.small} 248px;
  background: ${({ theme }) => theme.colors.background.light};
  box-shadow: ${({ theme }) => theme.shadows.card};
  position: relative;
  z-index: 100;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.small};
  }
`;

export const NavigationDiv = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
    transition: color 0.2s;
    padding: ${({ theme }) => theme.spacing.small} 0;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    &.sign-up {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text.inverted};
      padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
      border-radius: 4px;
      transition: all 0.3s ease;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;