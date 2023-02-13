import React, { useState } from 'react';

import { LinkStyled } from '../UI/Link/Link.styled';
import { AuthNavStyle } from '../AuthNav/AuthNav.styled';
import { WrapperForIcons } from '../UI/CommonStyled/Common.styled';
import { MdAppRegistration, MdOutlineLogin } from 'react-icons/md';
import Modal from 'components/UI/Modal/Modal';
import LogIn from 'components/Login/Login';

export const AuthNav = () => {
  const [IsOpenLogin, setIsOpenLogin] = useState(false);

  const openModalLogin = () => {
    setIsOpenLogin(true);
  };
  const closeModalLogin = () => {
    setIsOpenLogin(false);
  };

  return (
    <AuthNavStyle>
      <LinkStyled to="/register">
        <WrapperForIcons>
          <MdAppRegistration /> <span>Register</span>
        </WrapperForIcons>
      </LinkStyled>

      <LinkStyled onClick={openModalLogin}>
        <WrapperForIcons>
          <MdOutlineLogin /> <span>Log In</span>
        </WrapperForIcons>
      </LinkStyled>
      {IsOpenLogin && (
        <Modal closeModal={closeModalLogin}>
          <LogIn />
        </Modal>
      )}
    </AuthNavStyle>
  );
};
