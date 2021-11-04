import { Fragment } from "react";
import { useParams } from "react-router";
import Search from "../components/shop/Search";

const SearchPage = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1 className="text-center">"{params.name}"</h1>
      <main className="row">
        <Search />
      </main>
    </Fragment>
  );
};

export default SearchPage;
