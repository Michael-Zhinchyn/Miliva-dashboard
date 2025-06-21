import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const WelcomeHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;
