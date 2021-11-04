import { Fragment } from "react";
import PopularBooks from "../components/shop/Popular-books";

const PopularPage = () => {
  return (
    <Fragment>
      <h1 className="text-center">Popular</h1>
      <main className="row">
        <PopularBooks />
      </main>
    </Fragment>
  );
};

export default PopularPage;
