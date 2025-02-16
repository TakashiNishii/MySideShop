import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.length > 0 ? state.items.find(item => item.id === newItem.id) : false;

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        if (state.items.length > 0) {
          state.items.push({ ...newItem, quantity: 1 });
        } else {
          state.items = [{ ...newItem, quantity: 1 }];
        }
      }

      state.totalQuantity += 1;
      state.totalPrice += newItem.price;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== itemId);
        } else {
          existingItem.quantity -= 1;
        }

        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
