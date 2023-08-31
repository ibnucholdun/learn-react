import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

// ACTION dan REDUCER
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    status: false,
  },
  reducers: {
    login(state, action) {
      state.status = true;
    },
  },
});

// STORE
const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    cart: cartSlice.reducer,
  },
});

// SUBSCRIBE
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// DISPATCH
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 10 }));
store.dispatch(loginSlice.actions.login({ status: true }));
