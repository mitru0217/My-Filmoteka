import React from 'react';
import Navigation from '../Navigation/Navigation';
import { HeaderStyle, HeaderContainer } from './Header.styled';
import { AuthNav } from '../AuthNav/AuthNav';
const Header = () => {
  return (
    <HeaderStyle>
      <HeaderContainer>
        <Navigation />
        <AuthNav />
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
