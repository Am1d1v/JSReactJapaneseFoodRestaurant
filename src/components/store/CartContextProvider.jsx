import CartContext from "./cart-context"
import Cart from "../Cart/Cart"

function CartContextProvider(props) {

    // Add item to the cart
    const addItemHandler = (item) => {
        
    }

    // Remove item from the cart
    const removeItemHandler = (id) => {

    }

    // Cart State
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartContextProvider;