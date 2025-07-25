import { useModal } from "../../../hooks/useModal";
import { ModalTrailer } from "./Modal";

export const Trailers = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal}>ADD TRAILER</button>
      <p>List of trailers will be placed below after backend ready</p>

      {isOpen && <ModalTrailer onClose={closeModal} />}
    </div>
  );
};
