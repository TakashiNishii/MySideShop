import styled from "styled-components";

export const MainContainer = styled.main`
  padding: ${({ theme }) => theme.spacing.small} 248px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.small};
  }
`;
