import { StyledModal, StyledOverlay, CloseButton } from "./Modal.styled";
import AddDriverForm from "../DriverForm/DriverForm";

const Modal = ({ onClose }) => {
  return (
    <StyledOverlay>
      <StyledModal>
        <CloseButton onClick={onClose}>X</CloseButton>
        <div>
          <AddDriverForm />
        </div>
      </StyledModal>
    </StyledOverlay>
  );
};

export default Modal;
