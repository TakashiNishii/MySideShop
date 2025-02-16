import styled from 'styled-components';

export const CartSidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 50;
  display: flex;
  flex-direction: column;
`;

export const CartSidebarHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  .actions {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .clear-cart:hover {
    color: #dc2626;
  }
`;

export const CartSidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #eee;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const CartItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4 {
    margin: 0;
    font-size: 1rem;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

export const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    background: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }

  span {
    font-weight: bold;
  }
`;

export const CartTotal = styled.div`
  padding: 20px;
  border-top: 1px solid #eee;

  .total {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 16px;
    font-size: 1.2rem;
  }

  .checkout {
    width: 100%;
    padding: 12px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  
  p {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.1rem;
  }
`; 