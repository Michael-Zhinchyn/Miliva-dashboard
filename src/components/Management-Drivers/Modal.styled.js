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

export const ModalFormContainer = styled.div`
  position: relative;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;

  h2,
  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    color: #333;
  }

  label {
    display: block;
    margin-top: 10px;
    font-weight: 500;
    color: #555;
  }

  input[type="text"],
  input[type="password"],
  input[type="file"] {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    margin-bottom: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 0.95rem;
  }

  input[type="radio"] {
    margin-right: 5px;
  }

  button[type="submit"] {
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  button[type="submit"]:hover {
    background: #0056b3;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff4d4d;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #cc0000;
  }
`;
