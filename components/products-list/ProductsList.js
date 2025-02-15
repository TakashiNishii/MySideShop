import { Suspense, useEffect } from 'react'
import { ProductsSection } from './productlist.styles'
import Filters from './filters/Filters'
import Products from './products/Products'
import { ErrorBoundary } from '../common/ErrorBoundary'

const ProductsList = () => {
  return (
    <ProductsSection>
      <Filters />
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Products />
        </Suspense>
      </ErrorBoundary>
    </ProductsSection>
  )
}

export default ProductsList