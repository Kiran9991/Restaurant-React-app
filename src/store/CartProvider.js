import { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = props => {
    const [items, updateItems] = useState([]);
    const addItemToCartHandler = item => {
        updateItems([...items, item])
    };

    const removeItemFromCartHandler = id => {
        updateItems((prev) => {
            const updatedPrevList = prev.filter(item => item.id !== id);
            return updatedPrevList
        })
    };

    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;