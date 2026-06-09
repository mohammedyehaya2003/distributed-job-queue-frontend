import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">
        Home
      </Link>

      <Link className="nav-link" to="/submit-job">
        Submit Job
      </Link>

      <Link className="nav-link" to="/dashboard">
        Dashboard
      </Link>
    </nav>
  );
}

export default Navbar;