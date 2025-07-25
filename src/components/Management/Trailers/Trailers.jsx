import { useState } from "react";
import { ModalTrailer } from "./Modal";

export const Trailers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>ADD TRAILER</button>
      <p>List of trailers will be placed below after backend ready</p>

      {isModalOpen && <ModalTrailer onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
