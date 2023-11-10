import React from "react";

const AuthContext = React.createContext({
    isCart: false,
    showCart: null
});

export default AuthContext;