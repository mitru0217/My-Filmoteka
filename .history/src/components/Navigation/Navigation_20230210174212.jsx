import React from 'react';
import { LinkStyled } from '../UI/Link/Link.styled';
import { MdHome } from 'react-icons/md';
import { WrapperForIcons } from 'components/UI/CommonStyled/Common.styled';
import { NavigationForUser } from './Navigation.styled';
const Navigation = () => {
  return (
    <nav>
      <WrapperForIcons>
        <MdHome width="70" />
        <LinkStyled to="/" end>
          Home
        </LinkStyled>
      </WrapperForIcons>
      <NavigationForUser>
        <LinkStyled to="/about">About</LinkStyled>
        <LinkStyled to="/library">Library</LinkStyled>
        <LinkStyled to="/movies">Movies</LinkStyled>
      </NavigationForUser>
    </nav>
  );
};

export default Navigation;
