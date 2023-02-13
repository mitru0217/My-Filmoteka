import React from 'react';
import { LinkStyled } from '../UI/Link/Link.styled';
import { HeaderStyle } from './Header.styled';
import { AuthNav } from '../AuthNav/AuthNav';
const Header = () => {
  return (
    <HeaderStyle>
      <nav>
        <LinkStyled to="/" end>
          Home
        </LinkStyled>
        <LinkStyled to="/about">About</LinkStyled>
        <LinkStyled to="/library">Library</LinkStyled>
        <LinkStyled to="/movies">Movies</LinkStyled>
      </nav>
      <AuthNav />
    </HeaderStyle>
  );
};

export default Header;
