import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { RegisterForm } from 'components/Form/RegForm/RegisterForm';
import { setUser } from 'store/slices/userSlice';

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

  return <RegisterForm title="register" handleClick={handleRegister} />;
};

export { SignUp };
