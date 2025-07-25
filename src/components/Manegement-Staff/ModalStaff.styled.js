import styled from "styled-components";

// затемнений фон з блюром
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

// контейнер форми
export const ModalFormContainer = styled.div`
  position: relative;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

  h2 {
    margin-bottom: 1rem;
  }

  h3 {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  label {
    display: block;
    font-weight: 500;
    margin-top: 0.8rem;
  }

  input,
  select {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  select {
    background: #fff;
  }

  button[type="submit"] {
    margin-top: 1.5rem;
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #0056b3;
    }
  }

  /* кнопка закриття (X) */
  > button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
`;
