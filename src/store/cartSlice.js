import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const storedCartCount = storedCart.reduce(
  (sum, item) => sum + (item.quantity || 0),
  0
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: storedCart,
    cartCount: storedCartCount,
  },
  reducers: {
    addToCart: (state, action) => {
      let product;
      let quantity = 1;
      if (action.payload && action.payload.product) {
        product = action.payload.product;
        quantity = Number(action.payload.quantity) || 1;
      } else {
        product = action.payload;
        quantity = 1;
      }

      if (!product || !product.id) return;

      const existingItem = state.items.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }

      state.cartCount = state.items.reduce((s, it) => s + it.quantity, 0);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
      state.cartCount = state.items.reduce((s, it) => s + it.quantity, 0);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    decreaseQuantity: (state, action) => {
      let id;
      let quantity = 1;
      if (action.payload && typeof action.payload === "object") {
        id = action.payload.id;
        quantity = Number(action.payload.quantity) || 1;
      } else {
        id = action.payload;
      }
      const item = state.items.find((item) => item.product.id === id);
      if (item) {
        if (item.quantity > quantity) item.quantity -= quantity;
        else state.items = state.items.filter((it) => it.product.id !== id);
      }
      state.cartCount = state.items.reduce((s, it) => s + it.quantity, 0);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      state.cartCount = 0;
      localStorage.removeItem("cartItems");
    },
    setItemQuantity: (state, action) => {
      const { id, quantity } = action.payload || {};
      if (!id) return;
      const q = Number(quantity) || 0;
      if (q <= 0) {
        state.items = state.items.filter((it) => it.product.id !== id);
      } else {
        const item = state.items.find((it) => it.product.id === id);
        if (item) item.quantity = q;
        else {
          // No existing item: nothing to set (we don't auto-add here)
        }
      }
      state.cartCount = state.items.reduce((s, it) => s + it.quantity, 0);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    setCartItems: (state, action) => {
      state.items = Array.isArray(action.payload) ? action.payload : [];
      state.cartCount = state.items.reduce(
        (s, it) => s + (it.quantity || 0),
        0
      );
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart,
  setCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
