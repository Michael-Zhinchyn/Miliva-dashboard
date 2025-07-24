import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const LoginFormContainer = styled.div`
  position: relative; /* для позиціонування кнопки Х */
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    text-align: center;
    margin-bottom: 1rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
  }

  button {
    padding: 0.6rem;
    background: #007bff;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: #0056b3;
    }
  }

  p {
    text-align: center;
    color: red;
    font-size: 13px;
  }
`;

// ✅ Кнопка закриття
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #000;
  }
`;
