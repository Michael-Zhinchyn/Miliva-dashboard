import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between; /* Логотип зліва, кнопка справа */
  align-items: center;
  padding: 1rem 2rem;
  background: #f8f9fa;
  border-bottom: 1px solid #ddd;
`;

export const Logo = styled.img`
  height: 40px;
  object-fit: contain;
`;

export const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;
