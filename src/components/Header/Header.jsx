import { useState } from "react";
import logo from "../../assets/dark-color-horizontal-logo.svg";
import LoginForm from "../LoginForm/LoginForm";

import { HeaderContainer, Logo, LoginButton } from "./Header.styled";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Logo src={logo} alt="Company Logo" />
        <LoginButton onClick={() => setShowLogin(true)}>Log In</LoginButton>
      </HeaderContainer>

      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Header;
