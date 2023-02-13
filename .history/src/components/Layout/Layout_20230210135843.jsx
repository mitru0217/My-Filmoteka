import React from 'react';
import { Outlet } from 'react-router-dom';
// import Header from 'components/Header/Header';
import { Container } from './Layout.styled';
import { LinkStyled } from '../UI/Link/Link.styled';
import { HeaderStyle } from 'components/Header/Header.styled';

const Layout = () => {
  return (
    /* <Header /> */
    <Container>
      <HeaderStyle>
        <nav>
          <LinkStyled to="/" end>
            Home
          </LinkStyled>
          <LinkStyled to="/movies">About</LinkStyled>
          <LinkStyled to="/library">Library</LinkStyled>
          <LinkStyled to="/movies">Movies</LinkStyled>
        </nav>
      </HeaderStyle>
      <Outlet />
    </Container>
  );
};

export default Layout;
