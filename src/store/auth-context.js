import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { authActions } from "./auth-slice";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  isLoading: false,
  login: (token) => {},
  signup: () => {},
  logout: () => {},
  saveCart: () => {},
});

export const AuthContextProvider = (props) => {
  const dispatch = useDispatch();
  const { books, totalQuantity, totalPrice_cart } = useSelector(
    (state) => state.cart
  );
  const initalToken = localStorage.getItem("token");
  const [token, setToken] = useState(initalToken);
  const [loading, setLoading] = useState(false);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setLoading(true);
    setTimeout(() => {
      setToken(token);
      localStorage.setItem("token", token);
      setLoading(false);
      toast.success("Login successfully", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      dispatch(authActions.openModal());
    }, 1500);
  };

  const signupHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(authActions.checkLoginMode());
    }, 1000);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const saveCart = () => {
    if (token) {
      axios.put(
        `https://vernal-foundry-316200-default-rtdb.firebaseio.com/cart.json?auth=${token}`,
        {
          books: books,
          totalCartPrice: totalPrice_cart,
          totalQuantity: totalQuantity,
        }
      );
    }
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    isLoading: loading,
    login: loginHandler,
    signup: signupHandler,
    logout: logoutHandler,
    saveCart: saveCart,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
