"use client"
import { useEffect } from 'react';
import { ProductDetails, ProductImageContainer, ProductInfoSection } from './productdata.styles'
import { useSearchParams } from 'next/navigation'
import { useProductById } from '@/hooks/useProductById';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';



const ProductData = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');
  const { data, loading, error, getProduct } = useProductById();
  useEffect(() => {
    if (productId) {
      getProduct(productId)
    }
  }, [productId])

  if (loading) return <div>Loading product details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Product not found</div>;

  return (
    <ProductInfoSection>
      <ProductImageContainer>
        <Image src={data.product.image} alt={data.product.name} className='image' width={1000} height={1000} />
      </ProductImageContainer>
      <ProductDetails>
        <h1>{data.product.title}</h1>
        <h2>${data.product.price.toFixed(2)}</h2>
        <p>{data.product.description}</p>
        <button>
          <ShoppingCart size={24} />
          Add to cart
        </button>
      </ProductDetails>
    </ProductInfoSection>
  )
}

export default ProductData