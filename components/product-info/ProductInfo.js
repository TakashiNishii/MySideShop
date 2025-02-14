import React from 'react'
import { ProductHeader, ProductInfoContainer, ProductInfoSection } from './productinfo.styles'
import { CircleChevronLeft } from 'lucide-react'
import Link from 'next/link'
import ProductData from './product-data/ProductData'

const ProductInfo = () => {
  return (
    <ProductInfoContainer>
      <ProductHeader>
        <Link href='/' className='link'>
          <CircleChevronLeft size="32" />
          <h3 className='link text-back'>Back</h3>
        </Link>
      </ProductHeader>
      <ProductData />
    </ProductInfoContainer>
  )
}

export default ProductInfo