import styled from "styled-components";

export const MainContainer = styled.main`
padding: ${({ theme }) => theme.spacing.small};
max-width: ${({ theme }) => theme.breakpoints.desktop};
margin: 0 18px;
`;
