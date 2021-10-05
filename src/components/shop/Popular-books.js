import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Card } from "../UI/Card";

const PopularBooks = () => {
  const [homeBooks, setHomeBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const options = {
    method: "GET",
    url: "https://www.googleapis.com/books/v1/volumes?q=css",
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.items);
        setHomeBooks(response.data.items);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
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
        {homeBooks.map((book) => (
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

export default PopularBooks;
