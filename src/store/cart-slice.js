import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, totalAmount: 0, showCartBadge: false , changed:false },
  reducers: {

    replaceCart(state,action){
       state.totalQuantity = action.payload.totalQuantity;
       state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    showCartBadge(state) {
      state.showCartBadge = true;
    },
  },
});


export const cartActions = cartSlice.actions;
