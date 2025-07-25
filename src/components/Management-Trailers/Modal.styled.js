import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
`;

export const DropZone = styled.div`
  border: 2px dashed ${({ dragOver }) => (dragOver ? "blue" : "#aaa")};
  padding: 20px;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 8px;
  background: ${({ dragOver }) => (dragOver ? "#f0f8ff" : "#fafafa")};
  cursor: pointer;

  input[type="file"] {
    display: block;
    margin: 10px auto 0;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

export const PreviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #333;
`;

export const PreviewImage = styled.img`
  width: 80px;
  height: auto;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 15px;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;
