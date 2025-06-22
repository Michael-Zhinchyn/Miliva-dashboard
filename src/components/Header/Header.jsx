import logo from "../../assets/dark-color-horizontal-logo.svg";
import { Link } from "react-router-dom";
import { WelcomeHeader } from "./Header.styled";
import { Nav } from "./Header.styled";
import { StyledLink } from "./Header.styled";

function Header() {
  return (
    <WelcomeHeader>
      <div>
        <Link to="/">
          <img src={logo} alt="company logo" width={120} />
        </Link>
      </div>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/drivers">All Drivers</StyledLink>
      </Nav>
    </WelcomeHeader>
  );
}

export default Header;
