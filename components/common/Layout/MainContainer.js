import styled from "styled-components";

export const MainContainer = styled.main`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.xxxlarge};
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.spacing.small};
  }
`;
