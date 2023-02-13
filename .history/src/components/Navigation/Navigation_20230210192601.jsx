import React from 'react';
import { StyledLink } from '../UI/Link/Link.styled';
import { MdHome } from 'react-icons/md';
import { WrapperForIcons } from 'components/UI/CommonStyled/Common.styled';
import { NavigationStyle, NavigationForUser } from './Navigation.styled';
const Navigation = () => {
  return (
    <NavigationStyle>
      <StyledLink to="/" end>
        <WrapperForIcons>
          <MdHome width="70" />
          <span>Home</span>
        </WrapperForIcons>
      </StyledLink>

      <NavigationForUser>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/library">Library</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </NavigationForUser>
    </NavigationStyle>
  );
};

export default Navigation;
