// REDUCER

import { createStore } from "redux";

const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 20 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// STORE
const store = createStore(cartReducer);
console.log("oncreate store : ", store.getState());

// SUBSCRIBE
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// DISPACTH (ACTION)
const addToCart = { type: "ADD_TO_CART", payload: { id: 2, qty: 10 } };
store.dispatch(addToCart);
