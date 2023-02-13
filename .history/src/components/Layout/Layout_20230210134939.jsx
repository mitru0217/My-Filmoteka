import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Container } from './Layout.styled';
import { HeaderStyle } from '../Header/Header.styled';
const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
