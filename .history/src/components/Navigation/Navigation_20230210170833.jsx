import React from 'react';
import { LinkStyled } from '../UI/Link/Link.styled';
import { MdHome } from 'react-icons/md';
const Navigation = () => {
  return (
    <nav>
      <LinkStyled to="/" end>
        Home
      </LinkStyled>
      <MdHome />
      <LinkStyled to="/about">About</LinkStyled>
      <LinkStyled to="/library">Library</LinkStyled>
      <LinkStyled to="/movies">Movies</LinkStyled>
    </nav>
  );
};

export default Navigation;
