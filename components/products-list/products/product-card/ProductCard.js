"use client"
import { CardContainer, CardFooter, DiscountBadge, Price, ProductContent, ProductSubtitle, ProductTitle } from './productcard.styles';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/common/Icons/Icons';
import { AddCartButton } from '@/components/cart/AddCartButton';


const ProductCard = (
  { product }
) => {
  const maxTitleLength = 50;
  return (
    <CardContainer>
      {product?.discount && <DiscountBadge>{product.discount}% OFF</DiscountBadge>}
      <Image src={product.image} alt={product.title} className='product-image' width={500} height={500} quality={100} />
      <ProductContent>
        <ProductTitle
          title={product.title}
        >{product.title?.length > maxTitleLength ? product.title.slice(0, maxTitleLength) + '...' : product.title}</ProductTitle>
        <Price>${product.price}
          <span className='category'>{product.category?.charAt(0).toUpperCase() + product.category?.slice(1)}</span>
        </Price>
        <ProductSubtitle title={product.model}>
          {Icons[product.category]} Model: {product.model?.length > 20 ? product.model.slice(0, 20) + '...' : product.model}
        </ProductSubtitle>
        <ProductSubtitle>
          {product.description ? 
            (product.description.length > 125 ? 
              product.description.slice(0, 125) + '...' : 
              product.description
            ) : ''}
        </ProductSubtitle>
        <CardFooter>
          <Link href={`/productInfo?productId=${product.id}`} className='link' >
            View Details
          </Link>
          <AddCartButton product={product} expanded={false} />
        </CardFooter>

      </ProductContent>
    </CardContainer>
  );
};

export default ProductCard