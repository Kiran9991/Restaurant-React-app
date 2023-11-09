import { useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

import CartTotalCount from "./CartTotalCount";

const HeaderCartButton = (props) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <button className={classes.button} onClick={() => setShowCart(true)}>
      {showCart && <CartTotalCount />}
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
