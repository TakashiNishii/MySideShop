"use client"
import styled from "styled-components";


export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const ProductHeader = styled.div`
  margin-top: 20px;

  .link{
    width: 100px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    margin: 0px;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      .text-back {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`

