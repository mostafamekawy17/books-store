import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import ShoppingCartIcon from "./Icons/ShoppingCartIcon";

const HeaderButtonsGroup = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const disaptch = useDispatch();

  const openSignupHandler = () => {
    disaptch(authActions.openModal(false));
  };
  const openLoginHandler = () => {
    disaptch(authActions.openModal(true));
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-light btn-sm me-3"
        onClick={openSignupHandler}
      >
        Sign up
      </button>
      <button
        type="button"
        className="btn btn-outline-light btn-sm me-3"
        onClick={openLoginHandler}
      >
        Login
      </button>
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
