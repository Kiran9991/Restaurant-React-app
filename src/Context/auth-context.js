import React from "react";

const AuthContext = React.createContext({
    isCartItem: false,
    isCartOpen: null
});

export default AuthContext;