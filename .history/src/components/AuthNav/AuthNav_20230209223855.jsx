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
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenLogIn, setIsOpenLogIn] = useState(false);

  const openModalSignUp = () => {
    setIsOpenSignUp(true);
  };
  const closeModalSignUp = () => {
    setIsOpenSignUp(false);
  };
  const openModalLogIn = () => {
    setIsOpenLogIn(true);
  };
  const closeModalLogIn = () => {
    setIsOpenLogIn(false);
  };

  return (
    <Wrapper>
      <Link onClick={openModalSignUp}>
        <MdAppRegistration />
        Register
      </Link>
      {isOpenSignUp && (
        <Modal closeModal={closeModalSignUp}>
          <SignUp />
        </Modal>
      )}
      <Link onClick={openModalLogIn}>
        <FiLogIn />
        Log In
      </Link>
      {isOpenLogIn && (
        <Modal closeModal={closeModalLogIn}>
          <Login />
        </Modal>
      )}
    </Wrapper>
  );
};
