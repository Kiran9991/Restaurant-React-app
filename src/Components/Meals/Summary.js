import { Fragment } from "react";

import "./Summary.css";

const Summary = (props) => {
  return (
    <Fragment>
      <div className="summary-container">
        <h3 className="summary-heading">Delicious Food, Delivered To You</h3>
        <p className="summary-paragraph">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p className="summary-paragraph">
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </Fragment>
  );
};

export default Summary;
