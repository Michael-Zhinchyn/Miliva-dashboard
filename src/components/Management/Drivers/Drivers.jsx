import { useModal } from "../../../hooks/useModal";
import { ModalDriver } from "./Modal";

export const Drivers = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <h2>Drivers</h2>

      <button onClick={openModal}>ADD DRIVER</button>
      <p>List of drivers will be placed below after backend ready</p>

      {isOpen && <ModalDriver onClose={closeModal} />}
    </div>
  );
};
