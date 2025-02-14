import React from 'react'
import BaseLayout from '../layout'
import { MainContainer } from '@/components/common/Layout/MainContainer'
import ProductInfo from '@/components/product-info/ProductInfo'

export default function ProductInfoPage() {
  return (
    <>
      <BaseLayout />
      <MainContainer>
        <ProductInfo />
      </MainContainer>
    </>
  )
}
