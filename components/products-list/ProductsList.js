"use client"
import React, { useEffect } from 'react'
import { ProductsSection } from './productlist.styles'
import Filters from './filters/Filters'
import Products from './products/Products'

const ProductsList = () => {
  return (
    <ProductsSection>
      <Filters />
      <Products />
    </ProductsSection>
  )
}

export default ProductsList