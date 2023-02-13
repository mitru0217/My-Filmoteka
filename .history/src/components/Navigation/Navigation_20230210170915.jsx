import React from 'react';
import { LinkStyled } from '../UI/Link/Link.styled';
import { MdHome } from 'react-icons/md';
const Navigation = () => {
  return (
    <nav>
      <MdHome width="35" />
      <LinkStyled to="/" end>
        Home
      </LinkStyled>

      <LinkStyled to="/about">About</LinkStyled>
      <LinkStyled to="/library">Library</LinkStyled>
      <LinkStyled to="/movies">Movies</LinkStyled>
    </nav>
  );
};

export default Navigation;
