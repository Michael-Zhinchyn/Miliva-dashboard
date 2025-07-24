import { useNavigate } from "react-router-dom";
import { HeaderContainer, Title, LogoutButton } from "./Header.styled";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // повертаємось на логін
  };

  return (
    <HeaderContainer>
      <Title>Miliva Management</Title>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </HeaderContainer>
  );
};
