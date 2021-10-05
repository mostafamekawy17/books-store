import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar__flex">
      <NavLink activeClassName="active" to="/books-store/home">
        Home
      </NavLink>{" "}
      ----
      <NavLink activeClassName="active" to="/books-store/new">
        New
      </NavLink>{" "}
      ----
      <NavLink activeClassName="active" to="/books-store/popular">
        Popular
      </NavLink>
    </div>
  );
};

export default Navbar;
