import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import "./CartItem.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, quantity, totalPrice, price, imagePath } = props.books;

  const addHandler = () => {
    dispatch(
      cartActions.addBookToCart({
        id,
        title,
        quantity,
        totalPrice,
        price,
        imagePath,
      })
    );
  };

  const removeHandler = () => {
    dispatch(
      cartActions.removeBookFromCart({
        id,
        title,
        quantity,
        totalPrice,
        price,
        imagePath,
      })
    );
  };

  const removeAllSameBookHandler = () => {
    dispatch(
      cartActions.removeAllSameBook({
        id,
        title,
        quantity,
        totalPrice,
        price,
        imagePath,
      })
    );
  };

  return (
    <div className="shopping__cart">
      <div className="item">
        <div className="delete">
          <button className="btn btn-danger" onClick={removeAllSameBookHandler}>
            X
          </button>
        </div>

        <div className="image">
          <img src={imagePath} alt={title} width="auto" />
          <span> {quantity}x</span>
        </div>

        <div className="description">
          <span>{title}</span>
        </div>

        <div className="quantity">
          <button
            className="btn btn-dark btn-sm me-2"
            type="button"
            onClick={addHandler}
          >
            +
          </button>

          <button
            className="btn btn-dark btn-sm"
            type="button"
            onClick={removeHandler}
          >
            -
          </button>
        </div>

        <div className="price">
          {totalPrice.toFixed(2)} <span>LE</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
