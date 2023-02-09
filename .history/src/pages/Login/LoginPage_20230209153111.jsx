import { LoginForm } from 'components/Form/LoginForm/LoginForm';
import * as React from 'react';
import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/Auth/operations';
// import { useLocation } from 'react-router-dom';
import { setUser } from 'store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
export default function Login() {
  // const location = useLocation();

  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        push('/');
      })
      .catch(() => alert('Invalid user!'));
  };
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm handleLogin={handleLogin} />.
    </div>
  );
}
