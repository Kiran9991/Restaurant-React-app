import { useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from "../Cart/Cart.module.css";

const CartItems = () => {
  const cartCtx = useContext(CartContext);

  const uniqueItems = [];
  const track = new Map();

  for (let i = 0; i < cartCtx.items.length; i++) {
    if (track.has(cartCtx.items[i].name)) {
      let idx = track.get(cartCtx.items[i].name);
      uniqueItems[idx] = {
        ...uniqueItems[idx],
        quantity: Number(uniqueItems[idx].quantity) + Number(cartCtx.items[i].quantity),
      };
    } else {
      uniqueItems.push({ ...cartCtx.items[i] });
      track.set(cartCtx.items[i].name, uniqueItems.length - 1);
    }
  }

  const minusQuantity = (e) => {
    let itemId = e.target.value;
    cartCtx.removeItem(itemId);
  }

  return (
    <ul className={classes["cart-items"]}>
      {uniqueItems.map((item) => {
        return (
          <li key={item.id + Math.random()} className={classes.cartItem}>
            Name: {item.name} Price: {item.price}
            <div className={classes.quantityContainer}>
              <div className={classes.quantity}>x{item.quantity}</div>
            </div>
            <button className={classes.deleteButton} value={item.id} onClick={minusQuantity}> - </button>
            <button className={classes.deleteButton}> + </button>
          </li>
        );
      })}
    </ul>
  );
};

export default CartItems;
