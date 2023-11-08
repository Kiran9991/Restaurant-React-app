import React, { Fragment } from "react";

import Header from "./Components/Layout/Header";
import Summary from "./Components/Meals/Summary";

function App() {
  return (
    <Fragment>
      <Header/>
      <Summary/>
    </Fragment>
  );
}

export default App;
