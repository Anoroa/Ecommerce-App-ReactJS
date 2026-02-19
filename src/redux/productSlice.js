import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  filtered: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  wishList: JSON.parse(localStorage.getItem("wishList")) || [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
      state.filtered = action.payload;
    },
    filterByCategory: (state, action) => {
      state.filtered = state.value.filter(
        (item) => item.category === action.payload,
      );
    },
    clearFilter: (state) => {
      state.filtered = state.value;
    },
    // ============Cart=============
    setCart: (state, action) => {
      if (!action.payload) return;
      // itec check
      const item = state.cart.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      // save to localstorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((p) => p.id === id);
      if (item) {
        item.quantity = quantity;
        if (item.quantity < 1) item.quantity = 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    // ============WishList=============
    setWishlist: (state, action) => {
      if (!action.payload) return;

      const exists = state.wishList.find((p) => p.id === action.payload.id);
      if (!exists) {
        state.wishList.push(action.payload);
        localStorage.setItem("wishList", JSON.stringify(state.wishList));
      }
    },

    removeWishlist: (state, action) => {
      state.wishList = state.wishList.filter((p) => p.id !== action.payload);
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },
  },
});

export const {
  setProducts,
  filterByCategory,
  clearFilter,
  setCart,
  updateQuantity,
  removeFromCart,
  setWishlist,
  removeWishlist
} = productSlice.actions;

export default productSlice.reducer;
