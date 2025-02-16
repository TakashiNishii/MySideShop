import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
  max-width: 100dvw;
  flex-wrap: wrap;
`;

export const PaginationButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : 'white'};
  color: ${({ $active, theme }) =>
    $active ? 'white' : theme.colors.text.primary};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.secondary};
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

