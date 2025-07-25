import { useModal } from "../../../hooks/useModal";
import { ModalTruck } from "./Modal";

export const Trucks = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <h2>Trucks</h2>
      <button onClick={openModal}>ADD TRUCK</button>
      <p>List of Trucks will be placed below after backend ready</p>

      {isOpen && <ModalTruck onClose={closeModal} />}
    </div>
  );
};
