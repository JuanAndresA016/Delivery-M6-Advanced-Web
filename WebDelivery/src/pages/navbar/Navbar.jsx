import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
        <NavLink to="/" className="navlink">
            Home
        </NavLink>
        <NavLink to="/dashboard" className="navlink">
            Dashboard
        </NavLink>
    </div>
  );
}

export default Navbar;