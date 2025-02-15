import styled from "styled-components";

export const ProductInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      align-items: center;
  }
`

export const ProductImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .image{
    width: 100%;
    max-width: 600px;
    border: 1px solid #ddd;
    border-radius: 50px;
    box-shadow: 0px 0px 10px 0px #ddd;
    border-radius: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 50%;
  }

`

export const ProductDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0px;


  h4{
    margin: 20px 0 10px 0;
  }
  p{
    white-space: pre-wrap;
  }
  button{
    background: #16A34A;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    font-size: 16px;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 100%;
  }
`

export const ProductPrices = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const PriceWithDiscount = styled.h3`
  color: #16A34A;
  font-size: 24px;
  margin: 0px;
`

export const PriceWithoutDiscount = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: line-through;
  font-size: 18px;
`

export const DiscountBadgeOutline = styled.span`
  border: 1px solid #16A34A;
  color: #16A34A;
  padding: 1px 5px;
  border-radius: 100px;
  font-size: 12px;
`

export const ColorDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  h5{
    margin: 0px;
  }
`

export const ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ddd;
`

export const DescriptionSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`