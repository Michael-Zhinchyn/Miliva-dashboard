import { ModalStaff } from "./ModalStaff";
import { useModal } from "../../../hooks/useModal";

export const Staff = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <h2>Staff</h2>
      <button onClick={openModal}>Add Person</button>

      {isOpen && <ModalStaff onClose={closeModal} />}
    </div>
  );
};
