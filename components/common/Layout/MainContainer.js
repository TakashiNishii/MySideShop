import styled from "styled-components";

export const MainContainer = styled.main`
  padding: ${({ theme }) => theme.spacing.small} 248px;
  width: 100dvw;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.small};
  }
`;
