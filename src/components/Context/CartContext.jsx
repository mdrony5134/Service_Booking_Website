import { createContext, useContext, useReducer } from "react";

// create cart context
const CartContext = createContext();

//action type
const ADD_SERVICE = "ADD_SERVICE";

// reducer function

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_SERVICE:
      return [...state, action.payload];

    default:
      return state;
  }
};

// cart provider
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook
export const useService = () => {
  const context = useContext(CartContext);
  return context;
};
