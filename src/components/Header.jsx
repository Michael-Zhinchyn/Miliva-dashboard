import { Link } from "react-router-dom";
import logo from "../assets/dark-color-horizontal-logo.svg";

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="company logo" width={120} />
        <span> Miliva Service Dashboard</span>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/drivers">All Drivers</Link>
        <Link to="/add-driver">Add Driver</Link>
      </nav>
    </header>
  );
}

export default Header;
