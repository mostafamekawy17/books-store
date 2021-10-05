import { Fragment } from "react";
import NewBooks from "../components/shop/New-books";

const NewPage = () => {
  return (
    <Fragment>
      <h1 className="text-center">New</h1>
      <main className="row">
        <NewBooks />
      </main>
    </Fragment>
  );
};

export default NewPage;
