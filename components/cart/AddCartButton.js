"use client"
import { ShoppingCart } from 'lucide-react'
import { AddCartButtonContainer } from './addcartbutton.styles'
import { useCart } from '@/hooks/useCart'
export const AddCartButton = ({ product, expanded = false }) => {
  const { addItem } = useCart();

  return (
    <AddCartButtonContainer onClick={() => {
      addItem(product)
    }} className={expanded ? 'expanded' : ''}>
      <ShoppingCart size={20} style={
        {
          marginLeft: '-8px',
          marginTop: '-6px'
        }
      } />
      {expanded ? 'Add to Cart' : ''}
    </AddCartButtonContainer>
  );
};
