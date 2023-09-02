import { createContext, useReducer } from "react";

export const TotalPriceContext = createContext(null);

export const TotalPriceDispatchContext = createContext(null);
const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        total: action.payload.total,
      };
    default: {
      throw Error(`Unknow Type : ${action.type}`);
    }
  }
};

export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
};
