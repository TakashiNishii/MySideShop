import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  .product-image{
    width: 100%;
    height: 300px;
    object-fit: contain;
    border-bottom: 1px solid #eee;
  }
  .link{
    text-decoration: none;
    color: #FFF;
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 80%;
    padding: 4px 8px;
    border-radius: 8px;
    text-align: center;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const DiscountBadge = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  z-index: 2;
`;


export const ProductContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;
`;

export const ProductTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin: 0 0 8px;
  line-height: 1.3;
  max-height: 40px;
  overflow: hidden;
`;

export const ProductSubtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const Price = styled.div`
  font-size: 20px;
  color: #16A34A;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .category {
    padding: 2px 4px;
    border-radius: 100px;
    font-size: 12px;
    color: #666;
    font-weight: 400;
    border: 1px solid #ddd;
  }
`;

export const AddToCartButton = styled.button`
  width: 30px;
  height: 30px;
  padding: 12px;
  background: #16A34A;
  color: white;
  border: none;
  border-radius: 100%;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  padding-top: 4px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
`;
