import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { addItem, removeItem, clearCart } from '@/store/slices/cartSlice';

const selectCartState = createSelector(
  (state) => state.cart,
  (cart) => ({
    items: cart.items,
    totalQuantity: cart.totalQuantity,
    totalPrice: cart.totalPrice
  })
);

export const useCart = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectCartState);

  return {
    ...state,
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (itemId) => dispatch(removeItem(itemId)),
    clearCart: () => dispatch(clearCart())
  };
};

