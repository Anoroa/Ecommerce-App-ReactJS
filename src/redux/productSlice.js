import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  filtered: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
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
  },
});

export const {
  setProducts,
  filterByCategory,
  clearFilter,
  setCart,
  updateQuantity,
  removeFromCart,
} = productSlice.actions;

export default productSlice.reducer;
