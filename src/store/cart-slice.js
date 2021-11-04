import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCart = createAsyncThunk("get/cart", () => {
  const tokenId = localStorage.getItem("token");
  const data = axios
    .get(
      `https://vernal-foundry-316200-default-rtdb.firebaseio.com/cart.json?auth=${tokenId}`
    )
    .then((res) => res.data);
  return data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    books: [],
    totalQuantity: 0,
    totalPrice_cart: 0,
  },
  reducers: {
    addBookToCart(state, action) {
      const newBook = action.payload;
      const existingBook = state.books.find((book) => book.id === newBook.id);
      state.totalQuantity++;
      state.totalPrice_cart =
        state.totalPrice_cart + (newBook?.price ? newBook?.price : 299);
      if (!existingBook) {
        state.books.push({
          id: newBook.id,
          title: newBook.title,
          description: newBook.description,
          price: newBook.price ? newBook.price : 299,
          totalPrice: newBook.price ? newBook.price : 299,
          imagePath: newBook.imagePath,
          quantity: 1,
        });
      } else {
        existingBook.quantity++;
        existingBook.totalPrice =
          existingBook.totalPrice +
          (existingBook?.price ? existingBook?.price : 299);
      }
    },
    removeBookFromCart(state, action) {
      const id = action.payload.id;
      const existingBook = state.books.find((book) => book.id === id);
      state.totalQuantity--;
      state.totalPrice_cart =
        state.totalPrice_cart -
        (existingBook?.price ? existingBook?.price : 299);
      if (existingBook.quantity === 1) {
        state.books = state.books.filter((book) => book.id !== id);
      } else {
        existingBook.quantity--;
        existingBook.totalPrice =
          existingBook.totalPrice -
          (existingBook?.price ? existingBook?.price : 299);
      }
    },
    removeAllSameBook(state, action) {
      const id = action.payload.id;
      state.books = state.books.filter((book) => book.id !== id);
      state.totalQuantity = state.totalQuantity - action.payload.quantity;
      state.totalPrice_cart = state.totalPrice_cart - action.payload.totalPrice;
    },
  },
  extraReducers: {
    [getCart.fulfilled]: (state, { payload }) => {
      if (localStorage.getItem("token")) {
        state.books = payload.books;
        state.totalQuantity = payload.totalQuantity;
        state.totalPrice_cart = payload.totalCartPrice;
      } else {
        return state;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
