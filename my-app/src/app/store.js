import { configureStore } from '@reduxjs/toolkit';
import menuSlice from "../features/menu/menuSlice";
import cartSlice from "../features/cart/cartSlice";


export const store = configureStore({
  reducer: {
    menu: menuSlice,
    cart: cartSlice
  },
});

