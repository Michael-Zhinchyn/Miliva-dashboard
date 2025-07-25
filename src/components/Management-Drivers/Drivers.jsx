import { useState } from "react";
import { ModalDriver } from "./Modal";

export const Drivers = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <h2>Drivers</h2>

      <button onClick={() => setModalOpen(true)}>ADD DRIVER</button>
      <p>List of drivers will be placed below after backend ready</p>

      {isModalOpen && <ModalDriver onClose={() => setModalOpen(false)} />}
    </div>
  );
};
