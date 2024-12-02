import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../types/CartItem";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.product.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const item = state.items.find((item) => item.product.id === action.payload.productId);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
