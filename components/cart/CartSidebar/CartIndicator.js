"use client"
import React, { useState } from 'react'
import { CartIndicatorContainer, CartSidebarBackdrop } from './cartindicator.styles'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import CartSidebar from './Sidebar/CartSidebar'

export const CartIndicator = () => {
  const { totalQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  if (totalQuantity === 0) return null;

  return (
    <>
      {isOpen && <CartSidebarBackdrop onClick={() => setIsOpen(false)} />}
      <CartIndicatorContainer onClick={() => setIsOpen(!isOpen)}>
        <ShoppingCart size={24} />
        <span className="quantity">{totalQuantity}</span>
      </CartIndicatorContainer>
      {isOpen && <CartSidebar onClose={() => setIsOpen(false)} />}
    </>
  )
}
