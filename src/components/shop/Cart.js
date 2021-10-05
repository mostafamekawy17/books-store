import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";
const Cart = () => {
  const cartBooks = useSelector((state) => state.cart.books);
  const Total_cart_price = useSelector((state) => state.cart.totalPrice_cart);
  if (cartBooks.length === 0) {
    return (
      <section className="cart__layout">
        <h1 className="text-center">No Books ☹</h1>
      </section>
    );
  }
  return (
    <Fragment>
      <section className="cart__layout">
        {cartBooks.map((book) => (
          <CartItem
            key={book.id}
            books={{
              id: book.id,
              title: book.title,
              quantity: book.quantity,
              totalPrice: book.totalPrice,
              price: book?.price,
              imagePath: book.imagePath,
            }}
          />
        ))}
      </section>
      <section className="cart__layout cart__total">
        <h3>Total :</h3>
        <h3>{Total_cart_price.toFixed(2)} LE</h3>
      </section>
    </Fragment>
  );
};

export default Cart;
