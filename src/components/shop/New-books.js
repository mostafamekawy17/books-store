import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Card } from "../UI/Card";

const NewBooks = () => {
  const [newBooks, setnewBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=html")
      .then(function (response) {
        setnewBooks(response.data.items);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
    return () => {
      setnewBooks({});
    };
  }, []);

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
      <Fragment>
        {newBooks.map((book) => (
          <Card
            key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            description={book.volumeInfo.description}
            price={
              book.saleInfo.listPrice?.amount
                ? book.saleInfo.listPrice.amount
                : 299
            }
            imagePath={book.volumeInfo.imageLinks.thumbnail}
          />
        ))}
      </Fragment>
    );
  }
};

export default NewBooks;
