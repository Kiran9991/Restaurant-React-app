import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItems from "./CartItems";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  let totalQuantity = 0;

  for (let prices of cartCtx.items) {
    totalQuantity += Number(prices.price);
  }

  return (
    <Modal onClose={props.onClose}>
      <CartItems />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalQuantity.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
