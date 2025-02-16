"use client"
import { useEffect } from 'react';
import { ColorCircle, ColorDisplay, DescriptionSection, DiscountBadgeOutline, PriceWithDiscount, PriceWithoutDiscount, ProductDetails, ProductImageContainer, ProductInfoSection, ProductPrices } from './productdata.styles'
import { useSearchParams } from 'next/navigation'
import { useProductById } from '@/hooks/useProductById';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Icons } from '@/components/common/Icons/Icons';



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
        <Image src={data.product?.image} alt={data.product?.title} className='image' width={1000} height={1000} />
      </ProductImageContainer>
      <ProductDetails>
        <h1>{data.product?.title}</h1>
        <ProductPrices>
          <PriceWithDiscount>
            ${data.product?.price.toFixed(2)}
          </PriceWithDiscount>
          {data.product?.discount && <PriceWithoutDiscount>${(data.product?.price + data.product?.discount).toFixed(2)}</PriceWithoutDiscount>}

          {data.product?.discount && <DiscountBadgeOutline>{data.product?.discount}% off</DiscountBadgeOutline>}
        </ProductPrices>

        <h4>Product Description:</h4>

        <DescriptionSection>
          <h5>
            Brand: {data.product?.brand.charAt(0).toUpperCase() + data.product?.brand.slice(1)}
          </h5>

          <h5>
            Model: {data.product?.model}
          </h5>
        </DescriptionSection>

        <DescriptionSection>
          <h5>
            Category: {Icons[data.product?.category]}
            {data.product?.category.charAt(0).toUpperCase() + data.product?.category.slice(1)}
          </h5>

          <ColorDisplay>
            <h5>Color: </h5>
            <ColorCircle style={{ backgroundColor: data.product?.color }} />
          </ColorDisplay>
        </DescriptionSection>


        <p>{data.product?.description}</p>
        <button>
          <ShoppingCart size={24} />
          Add to cart
        </button>
      </ProductDetails>
    </ProductInfoSection>
  )
}

export default ProductData