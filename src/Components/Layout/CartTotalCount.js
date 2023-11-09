import ReactDom from "react-dom";
import { Fragment } from "react";
import './CartTotalCount.css';

const TotalCount = () => {
  return (
    <div className="cart-count">
      <p>{"Sushi"}</p>
      <h3>Total Amount {35.23}</h3>
      <button>Okay</button>
    </div>
  );
};

const CartTotalCount = () => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <TotalCount />,
        document.getElementById("cart-count")
      )}
    </Fragment>
  );
};

export default CartTotalCount;
