import React from 'react';
import { LinkStyled } from '../UI/Link/Link.styled';
import { MdHome } from 'react-icons/md';
import { WrapperForIcons } from 'components/UI/CommonStyled/Common.styled';
const Navigation = () => {
  return (
    <nav>
      <WrapperForIcons>
        <MdHome width="70" />
        <LinkStyled to="/" end>
          Home
        </LinkStyled>
      </WrapperForIcons>
      <LinkStyled to="/about">About</LinkStyled>
      <LinkStyled to="/library">Library</LinkStyled>
      <LinkStyled to="/movies">Movies</LinkStyled>
    </nav>
  );
};

export default Navigation;
