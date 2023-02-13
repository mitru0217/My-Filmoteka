import { useSelector } from 'react-redux';
// import {
//   selectUser,
//   selectIsLoggedIn,
//   selectIsRefreshing,
// } from 'redux/Auth/selectors';

// export const useAuth = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);
//   const user = useSelector(selectUser);

//   return {
//     isLoggedIn,
//     isRefreshing,
//     user,
//   };
// };

// export const selectIsLoggedIn = state => state.auth.isLoggedIn;
// export const selectUser = state => state.auth.user;
// export const selectIsRefreshing = state => state.auth.isRefreshing;

export function useAuth() {
  const { email, token, id } = useSelector(state => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
