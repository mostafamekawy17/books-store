import { useState } from "react";
import { useHistory } from "react-router";
import "./SearchBar.css";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const searchInputHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchFormHandler = () => {
    if (search !== "") {
      history.push(`/search/${search}`);
      setSearch("");
    }
    return;
  };

  return (
    <form className="form__search mt-5" onSubmit={searchFormHandler}>
      <input
        type="text"
        required
        onChange={searchInputHandler}
        value={search}
      />
      <svg
        onClick={searchFormHandler}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
    </form>
  );
};

export default SearchBar;
