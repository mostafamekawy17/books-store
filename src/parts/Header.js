import "./Header.css";
import HeaderButtonsGroup from "../components/UI/HeaderButtonsGroup";
import SearchBar from "../components/UI/SearchBar";
import Navbar from "../components/UI/Navbar";

const Header = () => {
  return (
    <header className="header__bg">
      <div className="d-flex justify-content-between w-100 align-items-center">
        <h3 className="text-light">Books Store</h3>
        <HeaderButtonsGroup />
      </div>
      <div>
        <SearchBar />
        <br />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
