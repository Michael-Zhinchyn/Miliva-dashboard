import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  gap: 1rem;
  background: #f0f0f0;
  padding: 0.75rem 2rem;
  border-bottom: 1px solid #ddd;
`;

export const NavLinkStyled = styled.span`
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: #0056b3;
    font-weight: 700;
  }
`;
