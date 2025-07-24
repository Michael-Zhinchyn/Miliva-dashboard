import { useState } from "react";
import logo from "../../assets/dark-color-horizontal-logo.svg";
import LoginForm from "../LoginForm/LoginForm";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <img src={logo} alt="compan logo" width={120}></img>
      <button onClick={() => setShowLogin(true)}>Log In</button>

      {showLogin && <LoginForm />}
    </div>
  );
};

export default Header;
