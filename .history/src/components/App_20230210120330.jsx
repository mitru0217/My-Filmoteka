import React from 'react';
// import Header from './Header/Header';
// import { Toaster } from 'react-hot-toast';
// // import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from 'components/utils/PrivateRout';
// import { RestrictedRoute } from 'components/utils/RestrictedRoute';
// // import { refreshUser } from 'components/Redux/Auth/operationsAuth';
// // import { useAuth } from 'hooks/useAuth';
// import { Layout } from 'components/Layout/Layout';
import HomePage from 'pages/Home/Home';
import LibraryPage from 'pages/Library/Library';
import NotFound from 'pages/NotFound/NotFound';
import { LinkStyled } from './UI/Link/Link.styled';
import Header from './Header/Header';

// const HomePage = lazy(() => import('../pages/Home/Home'));
// const SignUp = lazy(() => import('components/SignUp/SignUP'));
// const Login = lazy(() => import('components/Login/Login'));
// const LibaryPage = lazy(() => import('../pages/Library/Library'));

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
      <Header>
        <nav>
          <LinkStyled to="/" end>
            Home
          </LinkStyled>
          <LinkStyled to="/library">Library</LinkStyled>
        </nav>
      </Header>

      <Routes>
        <Route index element={<HomePage />} />
        <Route index element={<LibraryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
