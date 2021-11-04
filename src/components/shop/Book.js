import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { cartActions } from "../../store/cart-slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Book.css";
const Book = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
      .then(function (response) {
        setBook(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });

    return () => {
      setBook({});
    };
  }, [params.id]);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addBookToCart({
        id: book.id,
        title: book?.volumeInfo.title,
        price: book.saleInfo.listPrice?.amount
          ? book.saleInfo.listPrice.amount
          : 299,
        imagePath: book?.volumeInfo.imageLinks.thumbnail,
      })
    );
    toast.success(`"${book?.volumeInfo.title}" added to cart.`);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!loading) {
    return (
      <div className="book__details">
        <div className="image">
          <img
            src={book?.volumeInfo.imageLinks.thumbnail}
            height="auto"
            alt={book?.volumeInfo.title}
          />
        </div>
        <div className="description">
          <div className="title">{book?.volumeInfo.title}</div>
          <div className="des">{book?.volumeInfo.description}</div>
          <div className="auth">author: {book?.volumeInfo.authors}</div>
          <div className="price">
            <span>
              {book.saleInfo.listPrice?.amount
                ? book.saleInfo.listPrice.amount
                : 299}
            </span>
            <span> LE</span>
          </div>
          <div className="button">
            <button className="btn btn-dark" onClick={addToCartHandler}>
              ADD TO CART
            </button>
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
  }
};

export default Book;
