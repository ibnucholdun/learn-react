import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

// ACTION
const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

// REDUCER
// reducer cart
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
    // bisa pakai cara di bawah juga
    // state.cart = [...state.cart, action.payload];
  });
});

// reducer login
const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// STORE
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

// SUBSCRIBE
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// DISPATCH
store.dispatch(addToCart({ id: 2, qty: 10 }));
store.dispatch(login({ status: true }));
