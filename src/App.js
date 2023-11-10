import React, { Fragment, useState } from "react";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import AuthContext from "./Context/auth-context";

function App() {
  const [cartIsValid, setCartIsValid] = useState(false);

  const openCartItem = () => {
    setCartIsValid(true);
  };

  return (
    <AuthContext.Provider value={{
      isCartItem: cartIsValid,
      isCartOpen: openCartItem
    }}>
      <Cart/>
      <Header/>
      <main>
        <Meals />
      </main>
    </AuthContext.Provider>
  );
}

export default App;
