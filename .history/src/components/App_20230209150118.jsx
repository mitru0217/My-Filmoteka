import React, { useEffect, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'components/utils/PrivateRout';
import { RestrictedRoute } from 'components/utils/RestrictedRoute';
// import { refreshUser } from 'redux/Auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Layout } from 'components/Layout/Layout';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/RegisterForm'));
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const LibaryPage = lazy(() => import('../pages/Library/Library'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/library"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/library"
                component={<LoginPage />}
              />
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
