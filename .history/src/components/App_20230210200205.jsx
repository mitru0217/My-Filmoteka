import React from 'react';
import { lazy } from 'react';
// import { Toaster } from 'react-hot-toast';
// // import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from 'components/utils/PrivateRout';
// import { RestrictedRoute } from 'components/utils/RestrictedRoute';
// // import { refreshUser } from 'components/Redux/Auth/operationsAuth';
// // import { useAuth } from 'hooks/useAuth';
// import HomePage from 'pages/Home/HomePage';
// import LibraryPage from 'pages/Library/Library';
// import MoviesPage from 'pages/Movies/MoviesPage';
// import SingleMoviePage from 'pages/SingleMovie/SingleMoviePage';
// import NotFound from 'pages/NotFound/NotFound';
// import About from 'pages/About/About';
import Layout from './Layout/Layout';
const HomePage = lazy(() => import('../pages/Home/HomePage'));
const About = lazy(() => import('../pages/About/About'));
const LibraryPage = lazy(() => import('../pages/Library/LibraryPages'));
const MoviesPage = lazy(() => import('../pages/Movies/MoviesPage'));
const SingleMoviePage = lazy(() =>
  import('../pages/SingleMovie/SingleMoviePage')
);
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

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
          <Route path="about" element={<About />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<SingleMoviePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
