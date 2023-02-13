import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import Modal from 'components/Ui/Modal/Modal';
import Login from 'routes/login';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // const location = useLocation();
  return (
    <>
      <div>
        <h1>Home Page</h1>
      </div>
      {!isOpen && (
        <Modal closeModal={openModal}>
          <Login />
        </Modal>
      )}
    </>
  );
}
