import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar__flex">
      <NavLink activeClassName="active" to="/home">
        Home
      </NavLink>{" "}
      ----
      <NavLink activeClassName="active" to="/new">
        New
      </NavLink>{" "}
      ----
      <NavLink activeClassName="active" to="/popular">
        Popular
      </NavLink>
    </div>
  );
};

export default Navbar;
