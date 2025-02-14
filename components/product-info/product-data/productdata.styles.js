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
  h2{
    color: #16A34A;
  }
  p{
    margin: 10px 0 10px 0;
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