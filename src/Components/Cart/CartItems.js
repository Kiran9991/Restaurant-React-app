import { useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from "../Cart/Cart.module.css";

const CartItems = () => {
  const cartCtx = useContext(CartContext);

  const uniqueItems = cartCtx.items.reduce((startingValue, currentValue) => {
    let key = currentValue.name + currentValue.price

    if(!startingValue[key]) {
        startingValue[key] = {
            name: currentValue.name,
            price: currentValue.price,
            quantity: 0
        }
    }
    startingValue[key].quantity += Number(currentValue.quantity);
    return startingValue
  },[])

  const newUniqueItems = Object.values(uniqueItems);

  return (
    <ul className={classes["cart-items"]}>
      {newUniqueItems.map((item) => {
        return (
          <li key={item.id + Math.random()} className={classes.cartItem}>
            Name: {item.name} Price: {item.price}
            <div className={classes.quantityContainer}>
              <div className={classes.quantity}>x{item.quantity}</div>
            </div>
            <button className={classes.deleteButton}> - </button>
            <button className={classes.deleteButton}> + </button>
          </li>
        );
      })}
    </ul>
  );
};

export default CartItems;
