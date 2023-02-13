import React from 'react';

import { link } from '../UI/Link/Link.styled';
import { AuthNavStyle } from '../AuthNav/AuthNav.styled';
import { WrapperForIcons } from '../UI/CommonStyled/Common.styled';
import { MdAppRegistration, MdOutlineLogin } from 'react-icons/md';

export const AuthNav = () => {
  return (
    <AuthNavStyle>
      <link to="/register">
        <WrapperForIcons>
          <MdAppRegistration /> <span>Register</span>
        </WrapperForIcons>
      </link>

      <link LinkStyled to="/login">
        <WrapperForIcons>
          <MdOutlineLogin /> <span>Log In</span>
        </WrapperForIcons>
      </link>
    </AuthNavStyle>
  );
};
