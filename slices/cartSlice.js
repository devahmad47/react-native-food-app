import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
  state.items = [...state.items,action.payload];

    },
    removeToCart: (state, action) => {
      let newItems = [...state.items];
      let itemIndex = state.items.findIndex(
        item => item._id == action.payload.id
      );
      if (itemIndex >= 0) {
          newItems.splice(itemIndex, 1);
      } else {
        console.log("failed to delete item which don't exist!")
      }
      state.items=newItems;
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const selectCart = (state) => state.cart.items;
export const selectCartItemById=(state, id)=>state.cart.items.filter((item)=>item._id==id);
export const selectCartTotal = (state)=>state.cart.items.reduce((total,item)=>total=total+item.price, 0);
export const { addToCart, removeToCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
