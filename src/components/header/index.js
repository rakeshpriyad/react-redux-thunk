import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/User">
        Users
      </NavLink>
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink>

      <NavLink exact activeClassName="active" to="/U">
        U
      </NavLink>

      <NavLink exact activeClassName="active" to="/A">
        A
      </NavLink>
    </nav>
  );
}
export default Header;