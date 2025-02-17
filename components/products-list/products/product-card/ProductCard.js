"use client"
import { CardContainer, CardFooter, DiscountBadge, Price, ProductContent, ProductSubtitle, ProductTitle } from './productcard.styles';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/common/Icons/Icons';
import { AddCartButton } from '@/components/cart/AddCartButton';
import { useCart } from "@/hooks/useCart";

const ProductCard = (
  { product }
) => {
  const { addItem } = useCart();
  const maxTitleLength = 50;
  return (
    <CardContainer>
      {product?.discount && <DiscountBadge>{product.discount}% OFF</DiscountBadge>}
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEwLzYvLS0vLi40QDY4ND43NC4wRURKTU5UXV9hYWFgYGBgYGBgYGD/2wBDARUXFyAeIB4aGh4gICAgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        style={{
          objectFit: 'contain',
          width: '100%',
          height: '200px'
        }}
      />
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