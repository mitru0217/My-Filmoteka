import { useDispatch } from 'react-redux';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from 'components/Form/Form';
import { setUser } from 'components/Redux/Auth/sliceAuth';

const Login = () => {
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
      })
      .catch(() => alert('Invalid user!'));
  };

  return <Form title="LogIn" handleClick={handleLogin} />;
};

export { Login };
