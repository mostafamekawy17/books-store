import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import { userActions } from "../../store/user-slice";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import ShoppingCartIcon from "./Icons/ShoppingCartIcon";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const HeaderButtonsGroup = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const disaptch = useDispatch();
  const history = useHistory();

  const openSignupHandler = () => {
    disaptch(authActions.openModal(false));
  };
  const openLoginHandler = () => {
    disaptch(authActions.openModal(true));
  };

  const logoutHandler = () => {
    authCtx.saveCart();
    authCtx.logout();
    disaptch(userActions.setUserLogoutState());
    history.push("/");
    toast.error("You are logout", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div>
      {!isLoggedIn && (
        <button
          type="button"
          className="btn btn-outline-light btn-sm me-3"
          onClick={openSignupHandler}
        >
          Sign up
        </button>
      )}
      {!isLoggedIn && (
        <button
          type="button"
          className="btn btn-outline-light btn-sm me-3"
          onClick={openLoginHandler}
        >
          Login
        </button>
      )}
      {isLoggedIn && (
        <button
          type="button"
          className="btn btn-outline-light btn-sm me-3"
          onClick={logoutHandler}
        >
          Logout
        </button>
      )}
      <Link
        to="/shopping-cart"
        className="btn btn-primary position-relative btn-sm me-3"
      >
        <ShoppingCartIcon />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartQuantity}
        </span>
      </Link>
    </div>
  );
};

export default HeaderButtonsGroup;
