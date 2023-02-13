import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/Auth/operations';

import { RegForm } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    // const reset = () => {
    //   setName('');
    //   setEmail('');
    //   setPassword(' ');
    // };
  };

  return (
    <RegForm onSubmit={handleSubmit}>
      <h2>Registration</h2>
      } >
      <Input
        id="name"
        label="Username"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Input
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        sx={{ m: 1, width: '25ch' }}
      />
      <Input
        id="standard-adornment-password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Signup
      </Button>
    </RegForm>
  );
};
