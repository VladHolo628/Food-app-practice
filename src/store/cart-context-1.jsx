import React, { useReducer } from "react";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const updatedTotalAmount =
        state.totalAmount + action.payload.amount * action.payload.price;

      const isAlreadyAdded = state.items.some(
        (item) => item.id === action.payload.id
      );
      let updatedItems;
      if (!isAlreadyAdded) {
        updatedItems = state.items.concat(action.payload);
      } else {
        const targetItem = state.items.find(
          (item) => item.id === action.payload.id
        );
        const targetItemIndex = state.items.findIndex(
          (item) => item.id === targetItem.id
        );
        const updatedItem = {
          ...targetItem,
          amount: targetItem.amount + action.payload.amount,
        };

        updatedItems = [...state.items];
        updatedItems[targetItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case "REMOVE": {
      let updatedItems;
      let updatedTotalAmount = state.totalAmount - action.payload.price;

      if (action.payload.amount === 1) {
        updatedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        const targetItem = state.items.find(
          (item) => item.id === action.payload.id
        );
        const targetItemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );

        const updatedItem = {
          ...targetItem,
          amount: targetItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[targetItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case "RESET": {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  amount: 0,
  addItem: () => {},
  removeItem: () => {},
  reset: () => {},
});

export const CartContextProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const addHandler = (item) => {
    dispatch({ type: "ADD", payload: item });
  };

  const removeHandler = (item) => {
    dispatch({ type: "REMOVE", payload: item });
  };

  const resetHandler = () => {
    dispatch({ type: "RESET" });
  };

  let totalItems = 0;
  cartState.items.forEach((item) => {
    return (totalItems += item.amount);
  });
  const context = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    amount: totalItems,
    addItem: addHandler,
    removeItem: removeHandler,
    reset: resetHandler,
  };
  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
