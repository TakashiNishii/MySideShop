import styled, { keyframes } from 'styled-components';

export const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

export const ProductItem = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.card};

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 150px;
      height: 150px;
    }
  }
`;

export const ProductInfo = styled.div`
  flex: 1;

  h3 {
    margin: 0 0 10px 0;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    margin: 5px 0;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const Summary = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.card};

  h2 {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    margin: 10px 0;
    font-size: ${({ theme }) => theme.typography.sizes.body};
    color: ${({ theme }) => theme.colors.text.secondary};

    &:last-of-type {
      font-weight: ${({ theme }) => theme.typography.weights.bold};
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: ${({ theme }) => theme.typography.sizes.h3};
      margin-top: 20px;
    }
  }

  button {
    width: 100%;
    margin-top: 20px;
    padding: 15px;
    font-size: ${({ theme }) => theme.typography.sizes.body};
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SuccessModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.hover};
  animation: ${fadeIn} 0.3s ease-out;
  z-index: 1000;

  h2 {
    margin: 0;
    color: ${({ theme }) => theme.colors.success};
    text-align: center;
  }
`; 