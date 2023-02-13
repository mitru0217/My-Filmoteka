import React, { useEffect, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'components/utils/PrivateRout';
import { RestrictedRoute } from 'components/utils/RestrictedRoute';
// import { refreshUser } from 'components/Redux/Auth/operationsAuth';
// import { useAuth } from 'hooks/useAuth';
import { Layout } from 'components/Layout/Layout';

const HomePage = lazy(() => import('../pages/Home/Home'));
const SignUp = lazy(() => import('components/SignUp/SignUP'));
const Login = lazy(() => import('components/Login/Login'));
const LibaryPage = lazy(() => import('../pages/Library/Library'));

export const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/library" component={<SignUp />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/library" component={<Login />} />
            }
          />
          <Route
            path="/library"
            element={
              <PrivateRoute redirectTo="/login" component={<LibaryPage />} />
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
