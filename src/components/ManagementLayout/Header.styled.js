import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

export const LogoutButton = styled.button`
  background: #ff4d4d;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #e60000;
  }
`;
