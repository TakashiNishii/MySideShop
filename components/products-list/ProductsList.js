import { Suspense, useEffect } from 'react'
import { ProductsSection } from './productlist.styles'
import Filters from './filters/Filters'
import Products from './products/Products'

const ProductsList = () => {
  return (
    <ProductsSection>
      <Filters />
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
    </ProductsSection>
  )
}

export default ProductsList