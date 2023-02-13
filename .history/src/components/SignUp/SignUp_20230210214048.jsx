import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../Form/Form';
import { setUser } from '../../redux/userSlice';

const SignUp = () => {
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
  };

  return <Form title="register" handleClick={handleRegister} />;
};

export { SignUp };
