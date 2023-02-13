import React, { useState } from 'react';

import { LinkStyled } from '../UI/Link/Link.styled';
import { AuthNavStyle } from '../AuthNav/AuthNav.styled';
import { WrapperForIcons } from '../UI/CommonStyled/Common.styled';
import { MdAppRegistration, MdOutlineLogin } from 'react-icons/md';

export const AuthNav = () => {
  return (
    <AuthNavStyle>
      <LinkStyled to="/register">
        <WrapperForIcons>
          <MdAppRegistration /> <span>Register</span>
        </WrapperForIcons>
      </LinkStyled>

      <LinkStyled LinkStyled to="/login">
        <WrapperForIcons>
          <MdOutlineLogin /> <span>Log In</span>
        </WrapperForIcons>
      </LinkStyled>
    </AuthNavStyle>
  );
};
