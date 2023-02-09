import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Suspense } from 'react';
import Header from 'components/Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster reverseOrder={false} />
    </>
  );
};
