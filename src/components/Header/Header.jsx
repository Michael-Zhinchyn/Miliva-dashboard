import logo from "../../assets/dark-color-horizontal-logo.svg";
import { WelcomeHeader } from "./Header.styled";
import { Nav } from "./Header.styled";
import { StyledLink } from "./Header.styled";

function Header() {
  return (
    <WelcomeHeader>
      <div>
        <img src={logo} alt="company logo" width={120} />
      </div>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/drivers">All Drivers</StyledLink>
        <StyledLink to="/add-driver">Add Driver</StyledLink>
      </Nav>
    </WelcomeHeader>
  );
}

export default Header;
