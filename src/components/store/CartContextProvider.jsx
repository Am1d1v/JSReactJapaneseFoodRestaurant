import CartContext from "./cart-context"
import { useReducer } from "react";

// Default cart state
const defaultCartState = {
    items: [],
    totalAmount: 0
}

// Cart Reducer
const cartReducer = (state, action) => {

    // Add item to the cart
    if(action.type === 'ADD_ITEM'){

    }

    return defaultCartState;
};

function CartContextProvider(props) {

    const [cartState, dispatchCartAction] =  useReducer(cartReducer, defaultCartState);

    // Add item to the cart
    const addItemHandler = (item) => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item: item
        });
    }

    // Remove item from the cart
    const removeItemHandler = (id) => {

    }

    // Cart State
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartContextProvider;