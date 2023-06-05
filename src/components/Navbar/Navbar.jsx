import { Link, useLocation } from "react-router-dom";
import "./navbarStyle.css";

function Nav() {
  const location = useLocation();
  return (
    <div className="navigation">
      <Link to="/" className="logo-text">
        Pretty Mansion
      </Link>
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </Link>
        <Link
          to="/services"
          className={location.pathname === "/services" ? "active" : ""}
        >
          Services
        </Link>
      </div>
    </div>
  );
}

export default Nav;
