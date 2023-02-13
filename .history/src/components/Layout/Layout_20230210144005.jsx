import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
