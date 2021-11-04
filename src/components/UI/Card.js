import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Card.css";
import ShoppingCartIcon from "./Icons/ShoppingCartIcon";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const Card = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addBookToCart({
        id: props.id,
        title: props.title,
        price: props?.price ? props?.price : 299,
        imagePath: props.imagePath,
      })
    );
    toast.success(`"${props.title}" added to cart.`);
  };

  const checkImg = props.imagePath
    ? props.imagePath
    : "http://1.bp.blogspot.com/-PHugHREQYfQ/VSjGHkAWJ8I/AAAAAAAAARY/Yj_z37D5qzI/s1600/Book%2BIcon%2B1.jpg";
  return (
    <div className="col-6 col-md-3">
      <div
        className="card"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <Link className="non-link" to={`/book/${props.id}`}>
          <img src={checkImg} alt={props.title} />
        </Link>
        <div className="card__body">
          <button
            type="button"
            className="btn btn-outline-dark btn-sm"
            onClick={addToCartHandler}
          >
            <ShoppingCartIcon /> ADD TO CART
          </button>
          <Link className="non-link" to={`/book/${props.id}`}>
            <h6 className="card-title">{props.title}</h6>
            <p className="card-text">{props.price} LE</p>
          </Link>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};
