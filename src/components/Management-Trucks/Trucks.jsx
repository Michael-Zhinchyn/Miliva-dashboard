import { useState } from "react";
import { ModalTruck } from "./Modal";

export const Trucks = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h2>Trucks</h2>
      <button onClick={() => setModalOpen(true)}>ADD TRUCK</button>
      <p>List of Trucks will be placed below after backend ready</p>

      {isModalOpen && <ModalTruck onClose={() => setModalOpen(false)} />}
    </div>
  );
};
