import styled from "styled-components";


export const HeaderStyled = styled.header`
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.small};
  border-bottom: 1px solid #ddd;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
  }
`;