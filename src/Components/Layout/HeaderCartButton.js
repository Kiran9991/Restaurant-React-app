import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import AuthContext from "../../Context/auth-context";

const HeaderCartButton = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <button className={classes.button} onClick={authCtx.isCartOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
