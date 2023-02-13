import React from 'react';
import { Link } from '../UI/Link/Link.styled';
import { MdHome } from 'react-icons/md';
import { WrapperForIcons } from 'components/UI/CommonStyled/Common.styled';
import { NavigationStyle, NavigationForUser } from './Navigation.styled';
const Navigation = () => {
  return (
    <NavigationStyle>
      <Link to="/" end>
        <WrapperForIcons>
          <MdHome width="70" />
          <span>Home</span>
        </WrapperForIcons>
      </Link>

      <NavigationForUser>
        <Link to="/about">About</Link>
        <Link to="/library">Library</Link>
        <Link to="/movies">Movies</Link>
      </NavigationForUser>
    </NavigationStyle>
  );
};

export default Navigation;
