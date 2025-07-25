import { useState } from "react";
import { ModalStaff } from "./ModalStaff";

export const Staff = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h2>Staff</h2>
      <button onClick={() => setIsModalOpen(true)}>Add Person</button>

      {isModalOpen && <ModalStaff onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
