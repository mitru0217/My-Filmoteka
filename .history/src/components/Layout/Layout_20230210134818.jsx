import React from 'react';
import { Outlet } from 'react-router-dom';
// import Header from 'components/Header/Header';
import { Container } from './Layout.styled';
import { HeaderStyle } from '../Header/Header.styled';
import { LinkStyled } from '../UI/Link/Link.styled';
const Layout = () => {
  return (
    <>
      <HeaderStyle />
      <Container>
        <nav>
          <LinkStyled to="/" end>
            Home
          </LinkStyled>
          <LinkStyled to="/movies">About</LinkStyled>
          <LinkStyled to="/library">Library</LinkStyled>
          <LinkStyled to="/movies">Movies</LinkStyled>
        </nav>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
