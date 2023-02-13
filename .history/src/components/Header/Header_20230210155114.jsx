import React from 'react';
import Navigation from '../Navigation/Navigation';
import { HeaderStyle } from './Header.styled';
import { AuthNav } from '../AuthNav/AuthNav';
const Header = () => {
  return (
    <HeaderStyle>
      <Navigation />
      <AuthNav />
    </HeaderStyle>
  );
};

export default Header;
