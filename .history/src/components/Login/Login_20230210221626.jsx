import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../Form/Form';
import { setUser } from '../../redux/userSlice';

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

  return <Form title="sign in" handleClick={handleLogin} />;
};

export { Login };
