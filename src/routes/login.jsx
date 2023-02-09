// import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import Input from 'components/Ui/Input/Input';
import Button from 'components/Ui/Button/Button';
import { Link } from 'components/Ui/Link/Link.styled';
export default function Login() {
  //   const navigate = useNavigate();

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async event => {
    event.preventDefault();

    // validate the inputs
    if (!email || !password) {
      setError('Please enter your username and password.');
      return;
    }

    // clear the errors
    setError('');

    // TODO: send the login request
    console.log('Logging in...');
  };

  return (
    <>
      <h5>Login</h5>
      {/* {error && <Alert severity="error" sx={{my: 2}}>{error}</Alert>} */}
      <form onSubmit={onSubmit}>
        <Input
          label="Email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
        <div>
          Don't have an account yet? <Link href="/register">Register</Link>
        </div>
      </form>
    </>
  );
}
