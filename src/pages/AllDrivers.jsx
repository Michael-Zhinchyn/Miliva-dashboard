import AddDriverButton from "../components/AddDriverButton/AddDriverButton";
import Modal from "../components/Modal/Modal";
import { useState } from "react";

function AllDrivers() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h2>All Drivers</h2>
      <AddDriverButton onClick={() => setIsModalOpen(true)} />
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default AllDrivers;
