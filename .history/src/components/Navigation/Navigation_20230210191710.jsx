import React from 'react';
import { link } from '../UI/Link/Link.styled';
import { MdHome } from 'react-icons/md';
import { WrapperForIcons } from 'components/UI/CommonStyled/Common.styled';
import { NavigationStyle, NavigationForUser } from './Navigation.styled';
const Navigation = () => {
  return (
    <NavigationStyle>
      <link to="/" end>
        <WrapperForIcons>
          <MdHome width="70" />
          <span>Home</span>
        </WrapperForIcons>
      </link>

      <NavigationForUser>
        <link to="/about">About</link>
        <link to="/library">Library</link>
        <link to="/movies">Movies</link>
      </NavigationForUser>
    </NavigationStyle>
  );
};

export default Navigation;
