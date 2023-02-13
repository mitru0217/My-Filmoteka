import React from 'react';
import { LinkStyled } from './UI/Link/Link.styled';
import { HeaderStyle } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyle>
      <nav>
        <LinkStyled to="/" end>
          Home
        </LinkStyled>
        <LinkStyled to="/library">Library</LinkStyled>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
