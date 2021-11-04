import { Fragment } from "react";
import Books from "../components/shop/Books";

const HomePage = () => {
  return (
    <Fragment>
      <main className="row">
        <Books />
      </main>
    </Fragment>
  );
};

export default HomePage;
