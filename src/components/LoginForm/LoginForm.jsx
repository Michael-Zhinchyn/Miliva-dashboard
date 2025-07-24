import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../data/users";

import { Backdrop, LoginFormContainer, CloseButton } from "./LoginForm.styled";

const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      if (foundUser.role === "admin") {
        navigate("/management");
      } else {
        alert(`Welcome ${foundUser.firstName}, role: ${foundUser.role}`);
      }
    } else {
      setError("Invalid username or password");
    }
  };

  // ✅ Закриття по Escape + сабміт по Enter
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Enter") handleLogin();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [username, password]);

  return (
    <Backdrop onClick={onClose}>
      <LoginFormContainer onClick={(e) => e.stopPropagation()}>
        {/* Х для закриття */}
        <CloseButton onClick={onClose}>×</CloseButton>

        <h3>Login</h3>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Submit</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </LoginFormContainer>
    </Backdrop>
  );
};
export default LoginForm;
