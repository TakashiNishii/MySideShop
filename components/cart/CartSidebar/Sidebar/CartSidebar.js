"use client"
import { useCart } from '@/hooks/useCart';
import { CartSidebarContainer, CartSidebarContent, CartSidebarHeader, CartItem, CartItemInfo, CartTotal, EmptyCart, CartItemQuantity } from './cartsidebar.styles';
import { X, Trash2, Plus, Minus } from 'lucide-react';

const CartSidebar = (
  { onClose }
) => {
  const { items, totalPrice, totalQuantity, removeItem, addItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <CartSidebarContainer>
        <CartSidebarHeader>
          <h3>Carrinho</h3>
          <X size={24} />
        </CartSidebarHeader>
        <EmptyCart>
          <p>Seu carrinho está vazio</p>
        </EmptyCart>
      </CartSidebarContainer>
    );
  }

  return (
    <CartSidebarContainer>
      <CartSidebarHeader>
        <h3>Carrinho ({totalQuantity})</h3>
        <div className="actions">
          <Trash2 size={20}
            onClick={() => {
              clearCart()
              onClose()
            }}
            className="clear-cart" />
          <X size={24} onClick={onClose} />
        </div>
      </CartSidebarHeader>

      <CartSidebarContent>
        {items?.map((item) => (
          <CartItem key={item.id}>
            <img src={item.image} alt={item.title} />
            <CartItemInfo>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <CartItemQuantity>
                <button onClick={() => {
                  if (item.quantity === 1) {
                    clearCart()
                    onClose()
                  } else {
                    removeItem(item.id)
                  }
                }}>
                  <Minus size={16} />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => addItem(item)}>
                  <Plus size={16} />
                </button>
              </CartItemQuantity>
            </CartItemInfo>
          </CartItem>
        ))}
      </CartSidebarContent>

      <CartTotal>
        <div className="total">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button className="checkout">Finalizar Compra</button>
      </CartTotal>
    </CartSidebarContainer>
  );
};

export default CartSidebar; 