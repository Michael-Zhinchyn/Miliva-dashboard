import { LoginFormContainer } from "./LoginForm.styled";

const LoginForm = () => {
  return (
    <LoginFormContainer>
      <h3>Login</h3>
      <input
        type="text"
        placeholder="Username"
        style={{ display: "block", marginBottom: "1rem" }}
      />
      <input
        type="password"
        placeholder="Password"
        style={{ display: "block", marginBottom: "1rem" }}
      />
      <button>Submit</button>
    </LoginFormContainer>
  );
};

export default LoginForm;
