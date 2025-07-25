import { useState } from "react";
import { ModalDriver } from "./Modal";

export const Drivers = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <h3>ALL DRIVERS </h3>
      <button onClick={() => setModalOpen(true)}>ADD DRIVER</button>

      {isModalOpen && <ModalDriver onClose={() => setModalOpen(false)} />}
      <div>list of drivers</div>
    </div>
  );
};
