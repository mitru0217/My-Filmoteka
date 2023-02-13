import React, { useState } from 'react';
import { Link } from '../Ui/Link/Link.styled';
import { Wrapper } from 'components/AuthNav/AuthNav.styled';
import { MdAppRegistration } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import Modal from 'components/Ui/Modal/Modal';
import Login from 'routes/login';
import { SignUp } from 'components/SignUp/SignUP';
// import { LoginForm } from 'components/Form/LoginForm/LoginForm';

export const AuthNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Link onClick={openModal}>
        <MdAppRegistration />
        Register
      </Link>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <SignUp />
        </Modal>
      )}
      <Link onClick={openModal}>
        <FiLogIn />
        Log In
      </Link>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <Login />
        </Modal>
      )}
    </Wrapper>
  );
};
