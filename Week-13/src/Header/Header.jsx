import "./Header.css";
import logo from "./../logo.svg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div id="logo">
          <img src={logo} alt="logo" height="90px" width="90px" />
        </div>
        <div className="header nav-content">
          <NavLink to="/" className="link-text">
            Home
          </NavLink>
          <NavLink to="/contact" className="link-text">
            Contact
          </NavLink>
          <NavLink to="/about" className="link-text">
            About
          </NavLink>
        </div>
      </div>
    </>
  );
};
