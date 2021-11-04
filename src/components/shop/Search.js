import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card } from "../UI/Card";

const Search = () => {
  const params = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${params.name}`,
  };

  useEffect(() => {
    axios
      .get(options.url)
      .then(function (response) {
        setBooks(response.data.items);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
    return () => {
      setBooks({});
    };
  }, [options.url]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!loading && !books) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <h2>No result ☹</h2>
      </div>
    );
  }

  if (!loading && books) {
    return (
      <Fragment>
        {books.map((book) => (
          <Card
            key={book?.id}
            id={book?.id}
            title={book?.volumeInfo.title}
            description={book?.volumeInfo.description}
            price={
              book.saleInfo.listPrice?.amount
                ? book.saleInfo.listPrice.amount
                : 299
            }
            imagePath={book?.volumeInfo?.imageLinks?.thumbnail}
          />
        ))}
      </Fragment>
    );
  }
};

export default Search;
